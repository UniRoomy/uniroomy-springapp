import { NextApiRequest, NextApiResponse } from "next";
import { defaultUsers } from "../../src/data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ids: string[] = defaultUsers.map((userObj) => userObj.email);
  res.status(200).json(ids);
}
