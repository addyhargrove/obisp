function register() {
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!username || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.find(u => u.username === username)) {
      alert("Username already exists.");
      return;
    }
  
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully. Please login.");
    window.location.href = "login.html";
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      localStorage.setItem("loggedInUser", username);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password.");
    }

    
  }

  