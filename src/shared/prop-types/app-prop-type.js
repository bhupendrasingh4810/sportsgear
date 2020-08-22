import { shape, array, object, number, bool, string } from 'prop-types';

export const UserProfile = shape({
    addresses: array,
    auth: object,
    avatar: string,
    createdAt: string,
    email: string,
    lastLogin: string,
    name: string,
    updatedAt: string,
    msisdn: number,
    isActive: bool,
    isOnline: bool,
    isVerified: bool,
    role: string,
    _id: string
});

export const SystemPropTypes = shape({})

export const AppPropTypes = shape({
    isLoading: bool,
    user: UserProfile,
    system: SystemPropTypes,
    error: object
});
