const emptyStar = `<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`;

const fullStar = `<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`;

const halfStar = `<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_6991)" stroke-linejoin="round"/>
<path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_6991)"/>
<defs>
<linearGradient id="paint0_linear_148_6991" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
<linearGradient id="paint1_linear_148_6991" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`;

export function createStarRating(data) {
    let ratingStars = '';
  
    if (!data) {
      ratingStars = `${emptyStar.repeat(5)}`;
      return `<div>${ratingStars}</div>`;
    }
  
    const rating = Math.round(data);
  
    switch (rating) {
      case 0:
        ratingStars = `${emptyStar.repeat(5)}`;
        break;
      case 1:
        ratingStars = `${halfStar}${emptyStar.repeat(4)}`;
        break;
      case 2:
        ratingStars = `${fullStar}${emptyStar.repeat(4)}`;
        break;
      case 3:
        ratingStars = `${fullStar}${halfStar}${emptyStar.repeat(3)}`;
        break;
      case 4:
        ratingStars = `${fullStar.repeat(2)}${emptyStar.repeat(3)}`;
        break;
      case 5:
        ratingStars = `${fullStar.repeat(2)}${halfStar}${emptyStar.repeat(2)}`;
        break;
      case 6:
        ratingStars = `${fullStar.repeat(3)}${emptyStar.repeat(2)}`;
        break;
      case 7:
        ratingStars = `${fullStar.repeat(3)}${halfStar}${emptyStar}`;
        break;
      case 8:
        ratingStars = `${fullStar.repeat(4)}${emptyStar}`;
        break;
      case 9:
        ratingStars = `${fullStar.repeat(4)}${halfStar}`;
        break;
      case 10:
        ratingStars = `${fullStar.repeat(5)}`;
        break;
      default:
        throw new Error('Invalid rating');
    }
  
    return `<div>${ratingStars}</div>`;
  }
