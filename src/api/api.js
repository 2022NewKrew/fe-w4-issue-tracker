const BaseURL = process.env.SERVER_BASE_URL;

const handleStatusError = async (response) => {
  if (!response.ok) {
    if (response.status === 500 && response.json) {
      const { message } = await response.json();
      throw { response: response, status: response.status, text: message };
    }
    throw { response: response, status: response.status, text: response.statusText };
  }
  return response;
};

const customFetch = async ({ url, option }) => {
  const response = option ? await fetch(url, option) : await fetch(url);
  const validResponse = await handleStatusError(response);
  return validResponse.json ? await validResponse.json() : validResponse;
};

export const getIssues = () => customFetch({ url: `${BaseURL}/issues` });

export const getLabels = () => customFetch({ url: `${BaseURL}/labels` });

export const getMilestones = () => customFetch({ url: `${BaseURL}/milestones` });

export const patchCheckedIssue = (idList) =>
  customFetch({
    url: `${BaseURL}/issues`,
    option: {
      method: "PATCH",
      body: JSON.stringify(idList),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  });

export const patchLabel = ({ id, editedLabel }) =>
  customFetch({
    url: `${BaseURL}/labels/${id}`,
    option: {
      method: "PATCH",
      body: JSON.stringify(editedLabel),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  });

export const deleteLabel = ({ id }) =>
  customFetch({
    url: `${BaseURL}/labels/${id}`,
    option: {
      method: "DELETE",
    },
  });

export const createNewLabel = ({ newLabel }) =>
  customFetch({
    url: `${BaseURL}/labels`,
    option: {
      method: "POST",
      body: JSON.stringify(newLabel),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  });
