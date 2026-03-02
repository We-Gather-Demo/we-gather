"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
//Create an event
router.post('/', async (req, res) => {
    const { title, description, eventType, scheduledAt, meetingLink } = req.body;
    if (!title || !eventType || !scheduledAt) {
        return res.status(400).json({ error: 'title, eventType and scheduledAt are required' });
    }
    try {
        const event = await prisma.event.create({
            data: { title, description, eventType, scheduledAt: new Date(scheduledAt), meetingLink },
        });
        res.status(201).json(event);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create event' });
    }
});
//Get all upcoming events
router.get('/', async (req, res) => {
    try {
        const events = await prisma.event.findMany({
            where: {
                scheduledAt: { gte: new Date() },
            },
            orderBy: { scheduledAt: 'asc' },
        });
        res.json(events);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});
//RSVP to an event
router.post('/:eventId/rsvp', async (req, res) => {
    const { eventId } = req.params;
    const { walletAddress } = req.body;
    if (!walletAddress) {
        return res.status(400).json({ error: 'Wallet address is required' });
    }
    try {
        const member = await prisma.member.findUnique({ where: { walletAddress } });
        if (!member) {
            return res.status(404).json({ error: 'Member not found. Register first.' });
        }
        const rsvp = await prisma.rSVP.create({
            data: { memberId: member.id, eventId },
        });
        res.status(201).json(rsvp);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to RSVP' });
    }
});
//Cancel RSVP
router.delete('/:eventId/rsvp', async (req, res) => {
    const { eventId } = req.params;
    const { walletAddress } = req.body;
    try {
        const member = await prisma.member.findUnique({ where: { walletAddress } });
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        await prisma.rSVP.delete({
            where: {
                memberId_eventId: { memberId: member.id, eventId },
            },
        });
        res.json({ message: 'RSVP cancelled' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to cancel RSVP' });
    }
});
exports.default = router;
//# sourceMappingURL=events.js.map