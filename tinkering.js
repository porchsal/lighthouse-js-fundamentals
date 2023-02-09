function smartGarbage(trash, bins){
  let updatedBins = bins;

  if (trash === 'waste') {
    updatedBins.waste++;
  }
  else if (trash === 'recycling') {
    updatedBins.recycling++;
  } else if (trash === 'compost') {
    updatedBins.compost++;
  }
  return updatedBins;
};

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
