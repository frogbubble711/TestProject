export const getData = async (payload: any): Promise<any> => {
  try {
    const data = {
      name: 'Vignesh Gowrabathuni',
      gitURL: 'https://github.com/vigneshgowrabathuni',
      imageURL: 'https://vigneshgowrabathuni.github.io/static/vignesh-6d0af554099dacbc97942a19c7726c5f.jpg',
      portfolioURL: 'https://vigneshgowrabathuni.github.io/',
      role: 'Full Stack Web Developer',
    };
    return data;
  } catch (error) {
    throw Error('Error while getting the data');
  }
};
