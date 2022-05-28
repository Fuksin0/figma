
export const reverse = (massive) => {
    const newMassive = [];
    for (let i = massive.length - 1; i >= 0; i -= 1) {
      const newMass = massive[i];
      newMassive.push(newMass + []);
    }
    for(item of massive){
      if(massive > 0){
        return true;
      }
    }
    return newMassive;
  };