const API = "https://productsfeedbacknode.onrender.com/api/v1/products";

export const getAllFeedbacks = async (
  sort = "-upvotes",
  pageParams = 1,
  category = "",
  suggestion = true
) => {
  try {
    const response = await fetch(
      `${API}?sort=${sort}&page=${pageParams}&${
        category ? "category=" + category : ""
      }&${suggestion === true ? "status=suggestion" : ""}`
    );

    if (!response.ok) throw new Error("Failed to fetch the data");

    const data = await response.json();

    return data.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getFeedback = async (id) => {
  try {
    const response = await fetch(`${API}/${id}`);

    if (!response.ok) throw new Error("Failed to get a feedback");

    const data = await response.json();

    return data.data.feedback;
  } catch (err) {
    console.log(err.message);
  }
};

export const createFeedback = async (feedback) => {
  try {
    const response = await fetch(`${API}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });

    if (!response.ok) throw new Error("Failed to submit");

    const data = await response.json();

    return data.data.feedback;
  } catch (err) {
    console.log(err.message);
  }
};
export const editFeedback = async (feedback, id) => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });

    if (!response.ok) throw new Error("Failed to submit");

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteFeedback = async (id) => {
  try {
    const response = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Failed to delete");

    return null;
  } catch (err) {
    console.error(err.message);
  }
};

export const addComment = async (comment, id) => {
  try {
    const response = await fetch(`${API}/${id}/addComments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const addReply = async ([feedbackId, commentId, reply]) => {
  try {
    const response = await fetch(`${API}/${feedbackId}/${commentId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reply),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const upvote = async (id, userId) => {
  try {
    const response = await fetch(`${API}/${id}/${userId}/upvote`, {
      method: "PATCH",
    });
    const responseData = await response.json();

    return responseData;
  } catch (err) {
    console.log(err.message);
  }
};

export const getProjectCount = async () => {
  try {
    const response = await fetch(`${API}/projects`);

    if (!response.ok) throw new Error("failed to fetch project count");

    const data = await response.json();

    return data.data;
  } catch (err) {
    console.log(err.message);
  }
};
