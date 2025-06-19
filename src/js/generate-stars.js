export function generateStars(vote) {
  const ratingOutOf5 = Math.round(vote) / 2; // 10 üzerinden → 5'e indir
  const fullStars = Math.floor(ratingOutOf5); // Tam dolu yıldız
  const halfStar = ratingOutOf5 % 1 >= 0.5 ? 1 : 0; // Yarım varsa 1
  const emptyStars = 5 - fullStars - halfStar;

  let stars = '';

  for (let i = 0; i < fullStars; i++) {
    stars += '<span class="star">★</span>';
  }

  if (halfStar) {
    stars += '<span class="half-star">⯨</span>'; // Alternatif: ✬ veya stil vereceğiz
  }

  for (let i = 0; i < emptyStars; i++) {
    stars += '<span class="star-empty">☆</span>';
  }

  return stars;
}