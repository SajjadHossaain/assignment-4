function changeBg(id) {
  const allBtn = document.getElementById("all-btn");
  const interviewBtn = document.getElementById("interview-btn");
  const rejectBtn = document.getElementById("reject-btn");
  allBtn.classList.remove("btn-primary");
  interviewBtn.classList.remove("btn-primary");
  rejectBtn.classList.remove("btn-primary");
  allBtn.classList.add("text-[#64748B]");
  interviewBtn.classList.add("text-[#64748B]");
  rejectBtn.classList.add("text-[#64748B]");
  const selected = document.getElementById(id);
  selected.classList.add("btn-primary");
  selected.classList.remove("text-[#64748B]");
}

function showOnly(id){
  const jobSection = document.getElementById("job-section");
  const nojobSection = document.getElementById("no-job-section");
  jobSection.classList.add("hidden");
  nojobSection.classList.add("hidden");
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}