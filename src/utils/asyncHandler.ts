import { Request, Response, NextFunction } from 'express'

const asyncHandler = (
  requestHandler: (req: Request, res: Response, next: NextFunction) => {}
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      return next(err)
    })
  }
}

export default asyncHandler
