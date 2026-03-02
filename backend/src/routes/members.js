"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
//Register a new member
router.post('/', async (req, res) => {
    const { walletAddress, email } = req.body;
    if (!walletAddress) {
        return res.status(400).json({ error: 'Wallet address is required' });
    }
    try {
        const member = await prisma_1.default.member.upsert({
            where: { walletAddress },
            update: {},
            create: {
                walletAddress,
                email: email || null,
            },
        });
        res.status(201).json(member);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to register member' });
    }
});
//Get a member by wallet address
router.get('/:walletAddress', async (req, res) => {
    const { walletAddress } = req.params;
    try {
        const member = await prisma_1.default.member.findUnique({
            where: { walletAddress },
        });
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json(member);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch member' });
    }
});
//Mark member as founding member
router.patch('/:walletAddress/founding', async (req, res) => {
    const { walletAddress } = req.params;
    try {
        const member = await prisma_1.default.member.update({
            where: { walletAddress },
            data: { isFoundingMember: true },
        });
        res.json(member);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update member' });
    }
});
exports.default = router;
//# sourceMappingURL=members.js.map