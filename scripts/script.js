let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("reject-filter-btn");

const allCards = document.getElementById("all-cards");
const filterSection = document.getElementById("filtered-section");
const emptySection = document.getElementById("empty-section");

const mainSection = document.querySelector("main");
// console.log(mainSection)

function calculateCount() {
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id) {
  allBtn.classList.remove("btn-primary");
  interviewBtn.classList.remove("btn-primary");
  rejectedBtn.classList.remove("btn-primary");

  allBtn.classList.add("text-[#64748B]");
  interviewBtn.classList.add("text-[#64748B]");
  rejectedBtn.classList.add("text-[#64748B]");

  const selected = document.getElementById(id);
  selected.classList.add("btn-primary");
  selected.classList.remove("text-[#64748B]");

  currentStatus = id;

  if (id === "interview-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id === "reject-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderReject();
  } else if (id == "all-filter-btn") {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");
  }
}

mainSection.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    const jobInformation = parentNode.querySelector(".job-info").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;

    parentNode.querySelector(".job-status").innerText = "Applied";
    const cardInfo = {
      jobName,
      jobType,
      jobInformation,
      jobStatus: "Applied",
      jobDetails,
    };
    console.log(cardInfo);
    const jobApplied = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
    );

    if (!jobApplied) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );
    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }
    calculateCount();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    const jobInformation = parentNode.querySelector(".job-info").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;

    parentNode.querySelector(".job-status").innerText = "Reject";
    const cardInfo = {
      jobName,
      jobType,
      jobInformation,
      jobStatus: "Reject",
      jobDetails,
    };

    const jobReject = rejectedList.find(
      (item) => item.jobName == cardInfo.jobName,
    );
    if (!jobReject) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );
    if (currentStatus == "reject-filter-btn") {
      renderReject();
    }
    calculateCount();
  }
});

function renderInterview() {
  filterSection.innerHTML = " ";
  if (interviewList.length == 0) {
    emptySection.classList.remove("hidden");
  } else {
    emptySection.classList.add("hidden");
  }

  for (const interview of interviewList) {
    let div = document.createElement("div");
    div.className = "flex justify-between p-6";
    div.innerHTML = `
            <div class="bg-white space-y-5 ">
              <div class="flex gap-4 justify-between items-center">
                <div class="w-full space-y-1">
                  <h1 class="job-name font-semibold text-xl text-[#002C5C]">${interview.jobName}</h1>
                  <p class="job-type">${interview.jobType}</p>
                </div>
            </div>
            <p class="job-info">${interview.jobInformation}</p>
            <div class="space-y-2">
              <p class="job-status btn">${interview.jobStatus}</p>
              <p class="job-details">${interview.jobDetails}</p>
            </div>
            <div class="flex gap-2">
              <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
              <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
            </div>    
          </div>
          <div class="bg-white">
            <i class="fa-regular fa-trash-can"></i>
          </div>
    `;
    filterSection.appendChild(div);
  }
}
function renderReject() {
  filterSection.innerHTML = " ";

  if (rejectedList.length == 0) {
    emptySection.classList.remove("hidden");
  } else {
    emptySection.classList.add("hidden");
  }
  for (const reject of rejectedList) {
    let div = document.createElement("div");
    div.className = "flex justify-between p-6";
    div.innerHTML = `
            <div class="bg-white space-y-5 ">
              <div class="flex gap-4 justify-between items-center">
                <div class="w-full space-y-1">
                  <h1 class="job-name font-semibold text-xl text-[#002C5C]">${reject.jobName}</h1>
                  <p class="job-type">${reject.jobType}</p>
                </div>
            </div>
            <p class="job-info">${reject.jobInformation}</p>
            <div class="space-y-2">
              <p class="job-status btn">${reject.jobStatus}</p>
              <p class="job-details">${reject.jobDetails}</p>
            </div>
            <div class="flex gap-2">
              <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
              <button class="rejected-btn btn btn-outline btn-error">REJECTED</button>
            </div>    
          </div>
          <div class="bg-white">
            <i class="fa-regular fa-trash-can"></i>
          </div>
    `;
    filterSection.appendChild(div);
  }
}
