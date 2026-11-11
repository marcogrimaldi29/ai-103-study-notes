# Contributing to AI-103 Study Notes

Thanks for helping keep these notes accurate. They cover **Microsoft Exam AI-103: Developing AI Apps and Agents on
Azure**, and Microsoft Foundry changes fast, so features get renamed, retired or moved between one revision of the study
guide and the next. Reports from people studying with the notes are the best way to catch that.

> [!IMPORTANT]
> **This repo accepts issues, not pull requests.** Pull requests are turned off: I write every change myself and check
> it against the official documentation, so the notes keep one voice and stay consistent from page to page. If you know
> exactly how something should read, put your proposed wording in the issue. It's just as useful.

---

## Contents

- [Ways to Help](#-ways-to-help)
- [Before You Open an Issue](#-before-you-open-an-issue)
- [Opening an Issue](#-opening-an-issue)
- [Out of Scope](#-out-of-scope)
- [What Happens Next](#-what-happens-next)
- [Code of Conduct](#-code-of-conduct)
- [Security](#-security)

## 🙌 Ways to Help

Every report fits one of the six types in the issue template:

| Type | What it covers | For example |
| --- | --- | --- |
| **Content error** | Text, a table, a callout, a diagram or a code sample is wrong | A Python sample calls a method the SDK doesn't have, or a decision table points to the wrong service |
| **Outdated content** | Foundry, a service name or the exam has changed since the page was written | A feature was renamed or retired, or a row in the classic-to-new naming table has moved on again |
| **Exam coverage** | The notes don't match the official study guide | The study guide was revised after April 16, 2026, or it lists a skill the notes don't cover |
| **Site bug** | Search, navigation, the theme switcher, diagrams, a broken link or accessibility | A Mermaid diagram doesn't redraw in dark mode, a link returns 404, or a control can't be reached with the keyboard |
| **Device issue** | Something looks wrong or doesn't work on a specific device, browser or screen size | A table overflows on a phone in portrait, or the sidebar drawer won't close on a tablet |
| **Suggestion** | Something could be clearer or easier to study | A topic that would read better as a comparison table, a diagram, or another exam caveat |

## 🔎 Before You Open an Issue

- **Search the existing issues**, [open and closed](https://github.com/marcogrimaldi29/ai-103-study-notes/issues?q=is%3Aissue).
  If yours is already there, add a 👍 reaction or a comment with anything new rather than opening a duplicate.
- **Check the date.** The notes are written against the **skills measured as of April 16, 2026**. If the
  "Skills measured as of" heading in the
  [study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) shows a newer
  date, say so in the issue — it tells me which revision to compare against.
- **Check the current docs.** A quick look at the [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/foundry/)
  usually confirms whether something has changed, and gives you the link the issue asks for.
- **One problem per issue.** Separate issues are easier to track, fix and close. Several typos on the same page can go
  in one issue.
- **For a site bug, hard-refresh first** (Ctrl+F5, or Cmd+Shift+R on a Mac) in case your browser is showing an older
  copy of the page.

## 📝 Opening an Issue

1. Open a new issue with the [🐞 Report an Issue](https://github.com/marcogrimaldi29/ai-103-study-notes/issues/new?template=ISSUE_TEMPLATE.md)
   template.
2. Give it a title that names the page and the problem, for example *"Skill 4: Voice Live section uses an old model
   name"* rather than *"Mistake on page"*.
3. Fill in the template's sections. Leave out any that don't apply.

> [!TIP]
> To link straight to a section, click it in **On this page**, then copy the address from your browser.

### What Makes a Report Easy to Fix

- **A link to the exact section**, not just the page
- **The text as the notes have it**, quoted, so it can be found even if the page has moved on
- **An official source** for any content change — Microsoft Learn is best. A report without one may take longer, because
  every change has to be checked against the documentation before it goes in
- **For bugs and device issues:** the steps to reproduce it, what you expected and what happened instead, the device,
  operating system and browser, and a screenshot if it shows the problem
- **Your proposed wording**, if you have it. With pull requests turned off, this is the closest thing to suggesting an
  edit directly

## 🚫 Out of Scope

To keep the notes accurate and the issue tracker useful, please don't open issues for:

- **Live exam content.** Questions, answers or topics remembered from a real exam break
  [Microsoft's exam security policy](https://learn.microsoft.com/en-us/credentials/support/exam-and-assessment-lab-security-policies).
  Issues or comments that include them will be closed and the content removed.
- **Exam booking, scores or retakes.** [Microsoft Credentials support](https://learn.microsoft.com/en-us/credentials/support/help)
  can help with those.
- **Help with your own Azure or Foundry project.** For troubleshooting a deployment, a subscription or your own code,
  ask on [Microsoft Q&A](https://learn.microsoft.com/en-us/answers/) or open an Azure support request.
- **Anything private.** Issues are public, so leave out API keys, project endpoints, tenant IDs and customer details,
  including in screenshots.
- **Unofficial sources.** Practice-test sites, exam dump sites and AI chat answers aren't accepted as the source for a
  content change.
- **Promotion.** Links to courses, products or services, affiliate links and paid placements won't be added.
- **Security vulnerabilities.** Please
  [report these privately](https://github.com/marcogrimaldi29/ai-103-study-notes/security/advisories/new), as described
  in the [security policy](SECURITY.md), not in a public issue.

## 🔄 What Happens Next

- I maintain the notes on my own, in my spare time, so replies are best effort and there's no fixed response time.
- I check each report against the official documentation. If something needs clarifying, I'll ask on the issue, so keep
  an eye on your GitHub notifications.
- When a fix goes in, the issue is closed with a note or a link to the change. The live site updates shortly after.
- If nothing changes, the issue is closed with the reason, such as out of scope, can't be verified, or working as
  intended.
- An issue waiting on a reply may be closed after a while. Comment with the missing details and it can be reopened.

## 🤝 Code of Conduct

By opening, commenting on or reacting to issues here, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
Comments that are abusive, spam or share live exam content may be hidden, edited or locked.

## 🔒 Security

Found a security problem with the site or this repo? Please don't report it in a public issue. Use
[Report a vulnerability](https://github.com/marcogrimaldi29/ai-103-study-notes/security/advisories/new) instead, so only
you and I can see it. The [security policy](SECURITY.md) has the details.

---

If the notes helped you, the README's [💚 Support](https://github.com/marcogrimaldi29/ai-103-study-notes#-support)
section has a couple of ways to show it. Thanks for helping make them better for the next AI-103 candidate.
