export const umbraColor = 'rgba(black, .2)'
export const penumbraColor = 'rgba(black, .14)'
export const ambientColor = 'rgba(black, .12)'

export const umbraMap = {
  0: '0px 0px 0px 0px',
  1: '0px 2px 1px -1px',
  2: '0px 3px 1px -2px',
  3: '0px 3px 3px -2px',
  4: '0px 2px 4px -1px',
  5: '0px 3px 5px -1px',
  6: '0px 3px 5px -1px',
  7: '0px 4px 5px -2px',
  8: '0px 5px 5px -3px',
  9: '0px 5px 6px -3px',
  10: '0px 6px 6px -3px',
  11: '0px 6px 7px -4px',
  12: '0px 7px 8px -4px',
  13: '0px 7px 8px -4px',
  14: '0px 7px 9px -4px',
  15: '0px 8px 9px -5px',
  16: '0px 8px 10px -5px',
  17: '0px 8px 11px -5px',
  18: '0px 9px 11px -5px',
  19: '0px 9px 12px -6px',
  20: '0px 10px 13px -6px',
  21: '0px 10px 13px -6px',
  22: '0px 10px 14px -6px',
  23: '0px 11px 14px -7px',
  24: '0px 11px 15px -7px',
}

export const penumbraMap = {
  0: '0px 0px 0px 0px',
  1: '0px 1px 1px 0px',
  2: '0px 2px 2px 0px',
  3: '0px 3px 4px 0px',
  4: '0px 4px 5px 0px',
  5: '0px 5px 8px 0px',
  6: '0px 6px 10px 0px',
  7: '0px 7px 10px 1px',
  8: '0px 8px 10px 1px',
  9: '0px 9px 12px 1px',
  10: '0px 10px 14px 1px',
  11: '0px 11px 15px 1px',
  12: '0px 12px 17px 2px',
  13: '0px 13px 19px 2px',
  14: '0px 14px 21px 2px',
  15: '0px 15px 22px 2px',
  16: '0px 16px 24px 2px',
  17: '0px 17px 26px 2px',
  18: '0px 18px 28px 2px',
  19: '0px 19px 29px 2px',
  20: '0px 20px 31px 3px',
  21: '0px 21px 33px 3px',
  22: '0px 22px 35px 3px',
  23: '0px 23px 36px 3px',
  24: '0px 24px 38px 3px',
}

export const ambientMap = {
  0: '0px 0px 0px 0px',
  1: '0px 1px 3px 0px',
  2: '0px 1px 5px 0px',
  3: '0px 1px 8px 0px',
  4: '0px 1px 10px 0px',
  5: '0px 1px 14px 0px',
  6: '0px 1px 18px 0px',
  7: '0px 2px 16px 1px',
  8: '0px 3px 14px 2px',
  9: '0px 3px 16px 2px',
  10: '0px 4px 18px 3px',
  11: '0px 4px 20px 3px',
  12: '0px 5px 22px 4px',
  13: '0px 5px 24px 4px',
  14: '0px 5px 26px 4px',
  15: '0px 6px 28px 5px',
  16: '0px 6px 30px 5px',
  17: '0px 6px 32px 5px',
  18: '0px 7px 34px 6px',
  19: '0px 7px 36px 6px',
  20: '0px 8px 38px 7px',
  21: '0px 8px 40px 7px',
  22: '0px 8px 42px 7px',
  23: '0px 9px 44px 8px',
  24: '0px 9px 46px 8px',
}

export const shadow = {
  1: {
    boxShadow: `${umbraMap[1]} ${umbraColor}, ${penumbraMap[1]} ${penumbraColor}, ${ambientMap[1]} ${ambientColor}`,
  },
  2: {
    boxShadow: `${umbraMap[2]} ${umbraColor}, ${penumbraMap[2]} ${penumbraColor}, ${ambientMap[2]} ${ambientColor}`,
  },
  3: {
    boxShadow: `${umbraMap[3]} ${umbraColor}, ${penumbraMap[3]} ${penumbraColor}, ${ambientMap[3]} ${ambientColor}`,
  },
  4: {
    boxShadow: `${umbraMap[4]} ${umbraColor}, ${penumbraMap[4]} ${penumbraColor}, ${ambientMap[4]} ${ambientColor}`,
  },
  5: {
    boxShadow: `${umbraMap[5]} ${umbraColor}, ${penumbraMap[5]} ${penumbraColor}, ${ambientMap[5]} ${ambientColor}`,
  },
  6: {
    boxShadow: `${umbraMap[6]} ${umbraColor}, ${penumbraMap[6]} ${penumbraColor}, ${ambientMap[6]} ${ambientColor}`,
  },
  7: {
    boxShadow: `${umbraMap[7]} ${umbraColor}, ${penumbraMap[7]} ${penumbraColor}, ${ambientMap[7]} ${ambientColor}`,
  },
  8: {
    boxShadow: `${umbraMap[8]} ${umbraColor}, ${penumbraMap[8]} ${penumbraColor}, ${ambientMap[8]} ${ambientColor}`,
  },
  9: {
    boxShadow: `${umbraMap[9]} ${umbraColor}, ${penumbraMap[9]} ${penumbraColor}, ${ambientMap[9]} ${ambientColor}`,
  },
  10: {
    boxShadow: `${umbraMap[10]} ${umbraColor}, ${penumbraMap[10]} ${penumbraColor}, ${ambientMap[10]} ${ambientColor}`,
  },
  11: {
    boxShadow: `${umbraMap[11]} ${umbraColor}, ${penumbraMap[11]} ${penumbraColor}, ${ambientMap[11]} ${ambientColor}`,
  },
  12: {
    boxShadow: `${umbraMap[12]} ${umbraColor}, ${penumbraMap[12]} ${penumbraColor}, ${ambientMap[12]} ${ambientColor}`,
  },
  13: {
    boxShadow: `${umbraMap[13]} ${umbraColor}, ${penumbraMap[13]} ${penumbraColor}, ${ambientMap[13]} ${ambientColor}`,
  },
  14: {
    boxShadow: `${umbraMap[14]} ${umbraColor}, ${penumbraMap[14]} ${penumbraColor}, ${ambientMap[14]} ${ambientColor}`,
  },
  15: {
    boxShadow: `${umbraMap[15]} ${umbraColor}, ${penumbraMap[15]} ${penumbraColor}, ${ambientMap[15]} ${ambientColor}`,
  },
  16: {
    boxShadow: `${umbraMap[16]} ${umbraColor}, ${penumbraMap[16]} ${penumbraColor}, ${ambientMap[16]} ${ambientColor}`,
  },
  17: {
    boxShadow: `${umbraMap[17]} ${umbraColor}, ${penumbraMap[17]} ${penumbraColor}, ${ambientMap[17]} ${ambientColor}`,
  },
  18: {
    boxShadow: `${umbraMap[18]} ${umbraColor}, ${penumbraMap[18]} ${penumbraColor}, ${ambientMap[18]} ${ambientColor}`,
  },
  19: {
    boxShadow: `${umbraMap[19]} ${umbraColor}, ${penumbraMap[19]} ${penumbraColor}, ${ambientMap[19]} ${ambientColor}`,
  },
  20: {
    boxShadow: `${umbraMap[20]} ${umbraColor}, ${penumbraMap[20]} ${penumbraColor}, ${ambientMap[20]} ${ambientColor}`,
  },
  21: {
    boxShadow: `${umbraMap[21]} ${umbraColor}, ${penumbraMap[21]} ${penumbraColor}, ${ambientMap[21]} ${ambientColor}`,
  },
  22: {
    boxShadow: `${umbraMap[22]} ${umbraColor}, ${penumbraMap[22]} ${penumbraColor}, ${ambientMap[22]} ${ambientColor}`,
  },
  23: {
    boxShadow: `${umbraMap[23]} ${umbraColor}, ${penumbraMap[23]} ${penumbraColor}, ${ambientMap[23]} ${ambientColor}`,
  },
  24: {
    boxShadow: `${umbraMap[24]} ${umbraColor}, ${penumbraMap[24]} ${penumbraColor}, ${ambientMap[24]} ${ambientColor}`,
  },
}
