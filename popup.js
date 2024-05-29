document.addEventListener("DOMContentLoaded", function () {
  loadKeyValuePairs();

  document.getElementById("addBtn").addEventListener("click", addItem);
  document.getElementById("removeBtn").addEventListener("click", removeItem);
  document.getElementById("clearBtn").addEventListener("click", clearStorage);
});

function addItem() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;

  if (key && value) {
    localStorage.setItem(key, value);
    loadKeyValuePairs();

    document.getElementById("key").value = "";
    document.getElementById("value").value = "";
  }
}

function removeItem() {
  const key = document.getElementById("key").value;

  if (key) {
    localStorage.removeItem(key);
    loadKeyValuePairs();

    document.getElementById("key").value = "";
    document.getElementById("value").value = "";
  }
}

function clearStorage() {
  localStorage.clear();
  loadKeyValuePairs();
}

function loadKeyValuePairs() {
  const keyValueList = document.getElementById("keyValueList");
  keyValueList.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const li = document.createElement("li");
    li.textContent = `${key}: ${value}`;
    keyValueList.appendChild(li);
  }
}
