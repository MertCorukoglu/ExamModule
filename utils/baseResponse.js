module.exports  = (isError, response, errorMessage) => {
    if (isError) {
      return {
        isError: true,
        message: errorMessage,
      };
    } else {
      return {
        isError: false,
        payload: response,
      };
    }
  };