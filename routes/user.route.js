import { Router } from "express";

const userRouter = Router();

userRouter.post("/", (req, res) => {
  res.send({ title: "user created" });
});
userRouter.get("/", (req, res) => {
  res.send({ title: "user list" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "user detail" });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: "user updated" });
});
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "user deleted" });
});

export default userRouter;