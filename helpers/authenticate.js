import jwt from 'jsonwebtoken';

import HttpError from './HttpError.js';

import { User } from '../models/user.js';

export const authenticate = async (req, res, next) => {

    try {
        const { authorization = '' } = req.headers;

        const [bearer, token] = authorization.split(' ');

        if (bearer !== 'Bearer')
            throw HttpError(401);

        const { id } = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(id);

        if (!user || !user.token || user.token !== token) {
            throw HttpError(401, 'Not authorized');
        }
        req.user = user;
        next();
    } catch (error) {
        next(HttpError(401));
    }
};