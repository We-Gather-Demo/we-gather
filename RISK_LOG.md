# #75HER Challenge: Risk Log

**Project Name:** [Insert Project Name]  
**Team Name:** [Insert Team Name]

---

# 💡 Purpose & Instructions

**Purpose**  
Track issues you identified and fixed during development. This demonstrates **proactive problem-solving and critical thinking** to judges.

**Instructions**

- Document risks **as you find them during the hackathon**
- Categorize each by **severity** (Critical, Major, Minor)
- Clearly show **how you resolved them with evidence**

**Target:** Document **at least 3 risks** you found and fixed.

---

# 🔴 Severity Levels

**🔴 Critical (Red)**  
Blocks submission. Examples include:
- Exposed API keys
- Fabricated claims
- IP violations
- Broken demo

**🟠 Major (Orange)**  
Must fix before final submission:
- Missing citations
- Accessibility violations
- Broken links

**🟡 Minor (Yellow)**  
Document and fix if time permits:
- Minor typos
- UI polish issues

---

# 🛡️ Risk Log Table

| Area | Issue Description | Severity | Fix Applied | Evidence / Link | Status |
|------|------------------|----------|-------------|-----------------|--------|
| Privacy | API key visible in code | 🔴 Critical | Removed key and added `.env.example` | `.env.example` | ✅ Fixed |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

---

# 🚩 Risk Categories to Monitor

**Accuracy & Verifiability**
- Are claims backed by credible sources?

**Privacy & Security**
- No exposed API keys
- No PII (Personally Identifiable Information)

**Ethics & DEI**
- Inclusive language
- Representative examples

**Legal / IP & Licensing**
- Proper licenses for libraries
- Attribution for assets

**Accessibility**
- Alt text on images
- WCAG AA color contrast (4.5:1)

**Operational**
- Demo runs from a fresh clone
- All links work

---

# ✅ Self-Red-Team Checklist

**Run this check 48 hours before submission**

## Privacy & Security

- [ ] No API keys, passwords, or tokens in code
- [ ] `.env.example` file included with dummy values
- [ ] No real user data (emails/names) in screenshots or demos

## Accuracy & Sources

- [ ] All statistics have source citations in the Evidence Log
- [ ] Data visualizations show **real or clearly labeled synthetic data**

## Legal & IP

- [ ] `LICENSE` file present and all dependencies listed
- [ ] No unauthorized logos or trademarks used

## Accessibility

- [ ] All images have meaningful **alt text**
- [ ] Color contrast meets **WCAG AA standards**
- [ ] Keyboard navigation works for interactive elements

## Operational

- [ ] Project runs from a **fresh clone**
- [ ] All links in the README and documentation work

---

# 🏆 Tips for a Strong Risk Log

**Be Honest**  
Judges respect transparency regarding the issues you caught.

**Provide Evidence**  
Document fixes with **specific file names or line numbers**.

**Update Regularly**  
Check this list **weekly during development (Days 51–70).**

**Don't Claim Zero Risks**  
It is not credible to have found **no risks during a project.**

---

**Part of the #75HER Challenge | CreateHER Fest 2026**
