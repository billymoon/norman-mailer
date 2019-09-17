import norman from "../../modules/norman";

export default (req, res) =>
  res.json(
    norman({
      fromEmail: "some@guy.com",
      fromName: "Some Guy",
      bodyText: "some message",
      toEmail: "billy@itaccess.org"
    })
  );
