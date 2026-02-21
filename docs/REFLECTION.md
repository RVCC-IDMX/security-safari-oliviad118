# Reflection

Answer each question in 2-3 sentences.

## Most surprising discovery

Which vulnerability surprised you the most to find? Why didn't you expect it?

The secret hiding in git history was the most surprising discovery. I initially thought that removing the .env file in a later commit would have "fixed" the problem, but learning that `git show 1630a0d:.env` could still retrieve the exposed API key was eye-opening. This taught me that git history is immutable and that once sensitive data is committed, it requires much more than a simple deletion to truly remove it.

## Real-world risk

Pick one vulnerability you found. How would you explain its danger to a teammate who's never heard of it?

The `eval()` code injection vulnerability is like giving a stranger the keys to your house and saying "do whatever you want." When users can input JavaScript code that gets executed directly through `eval()`, they can steal user data, redirect to malicious websites, or completely take over the webpage. It's not just about breaking the calculator - an attacker could potentially access cookies, local storage, or perform actions on behalf of the user without their knowledge.

## Future practice

What specific habit or check will you add to your own coding workflow to catch these issues before they ship?

I will implement three key practices: First, always run `npm audit` before commits to catch vulnerable dependencies early. Second, never use `innerHTML` with user input - always use `textContent` or proper sanitization libraries. Third, I'll add git pre-commit hooks to scan for secrets and personally review every commit diff to ensure no sensitive data is being added to version control.
