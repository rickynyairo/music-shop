export const errorInterceptor = error => store => {
  if (error.status === 500) {
    return serverErrorInterceptor(error)(store);
  }
  const formattedError = error.data;
  formattedError.status = error.status;
  throw formattedError;
};

export const serverErrorInterceptor = error => store => {
  if (error.status === 500) {
    throw error;
  }
};
