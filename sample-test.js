import fetch from "node-fetch";

export async function analyzeFailure(failureDetails) {
  const prompt = `
You are a QA Automation Engineer.
Analyze the following test failure and provide:
1. Explanation of the issue
2. Probable root cause
3. Suggested fix

Failure Info:
Test Name: ${failureDetails.testName}
Error: ${failureDetails.error}
Steps: ${failureDetails.steps}
`;

  // Dummy AI response (simulation for demo purpose)
  return `
Failure Explanation:
Login failed because the expected dashboard element was not found.

Probable Root Cause:
Incorrect credentials or delayed page load.

Suggested Fix:
Validate test data and add proper wait conditions.
`;
}
