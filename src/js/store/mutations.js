
export const showDescription = (state) => {
  state.isShow = 'description';
};

export const showApp = (state) => {
  state.isShow = 'app';
};

export const changeColor0 = (state) => {
  state.megaphoneColor = 0;
};
export const changeColor1 = (state) => {
  console.log('葵に成ります');
  state.megaphoneColor = 1;
};
