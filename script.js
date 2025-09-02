document.getElementById("btn").addEventListener("click", async () => {
  const dogDiv = document.getElementById("dog");
  dogDiv.innerHTML = "<p>Carregando...</p>";

  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    if (data.status === "success") {
      dogDiv.innerHTML = `<img src="${data.message}" alt="Cachorro aleatório">`;
    } else {
      dogDiv.innerHTML = "<p>Erro ao carregar cachorro 😢</p>";
    }
  } catch (error) {
    dogDiv.innerHTML = "<p>Erro de conexão 😢</p>";
  }
});
