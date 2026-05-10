function startChecklist() {
  const quiz = document.getElementById("quiz");
  quiz.classList.remove("hidden");
}

function generateChecklist() {
  const results = document.getElementById("results");
  const checklist = document.getElementById("checklistItems");

  const w2 = document.getElementById("w2Income").value;
  const selfEmployment = document.getElementById("selfEmployment").value;

  checklist.innerHTML = "";

  if (w2 === "Yes") {
    checklist.innerHTML += `
      <li>Gather your W-2 forms from employers.</li>
    `;
  }

  if (selfEmployment === "Yes") {
    checklist.innerHTML += `
      <li>You may need a Schedule C for self-employment income.</li>
      <li>Gather records of business income and expenses.</li>
    `;
  }

  checklist.innerHTML += `
    <li>Have your ID and basic personal information ready.</li>
    <li>Review possible deductions and tax credits.</li>
  `;

  results.classList.remove("hidden");
}

function showEstimator() {
  const estimator = document.getElementById("estimator");
  estimator.classList.remove("hidden");
}

function estimateRefund() {
  const income =
    Number(document.getElementById("income").value);

  const withheld =
    Number(document.getElementById("withheld").value);

  const estimatedTax = income * 0.12;

  const difference = withheld - estimatedTax;

  const result =
    document.getElementById("estimateResult");

  if (difference > 0) {
    result.innerText =
      `Estimated Refund: $${difference.toFixed(2)}`;
  } else {
    result.innerText =
      `Estimated Balance Due: $${Math.abs(difference).toFixed(2)}`;
  }
}
