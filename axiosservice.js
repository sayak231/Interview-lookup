import axios from "axios";

const headers = {
  Authorization:
    "Bearer " +
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjAwNDM4MDYsIm5iZiI6MTYyMDA0MzgwNiwianRpIjoiMmJjZmFlY2ItYjVmNC00MjAxLTkzMTctNDZmY2MzNjZmYjU4IiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiAyMyBUZXN0aW5nIiwiZW1haWwiOiJzbWl0aGNoZXJ5bEB5YWhvby5jb20iLCJ1c2VyX2lkIjoidXNlcl85NzlmMjM1OGM3NTU0YzgwOWQwZDY4ODk0M2I4OTY2YiIsImNvbXBhbnlfaWQiOiJjb21wYW55X2RmMTUzNTU4NGE4YzRjNmE5OGZjOTM5Y2UxMDVjMWE2IiwiaWNvbiI6Imh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvYWRlNTIwN2Q1YjQyYzVkYTU5NWVkZDc4MTg5ZDc3MTciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.sKAqHe5j3nQ-RteGao3Wjtz6v2hnbPkRnRauw8lfG88",
  Accept: "application/json",
  "Content-Type": "application/json",
};

const url =
  "https://stage.api.sloovi.com/task/lead_58be137bfde045e7a0c8d107783c4598";

export const getUserId = async () => {
  try {
    const data = await axios.get("https://stage.api.sloovi.com/user", {
      headers,
    });
    return data.data;
  } catch (err) {
    throw err;
  }
};
