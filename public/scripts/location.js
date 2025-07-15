function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const { longitude, latitude, altitude } = position.coords;
    const query = new URLSearchParams({ latitude, longitude, altitude });
    window.location.href = `/uv-help?${query}`;
  });
}

document.getElementById('sunscreen-btn').addEventListener('click', getLocation);
