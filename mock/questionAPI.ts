const question = [{
  id: 1,
  name: "React",
  content: "AAABBBCCC"
}];

export default {
  'GET /api/v1/queryQuestionList': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
      data: {
        list: question,
      },
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
