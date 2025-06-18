export async function loadHTML(id, filePath) {
  const container = document.getElementById(id);
  try {
    const res = await fetch(filePath);
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = `<p style="color:red;">${filePath} yüklenemedi.</p>`;
    console.error(`Hata: ${filePath}`, err);
  }
}
