import UserModel, { IUser } from '@/models/user';

const userService = {
  findUserById: async (id: string) => {
    const user = await UserModel.findById(id).select([
      'username',
      'email',
      'phone',
      'gender',
      'email_verify',
      'phone_verify',
      'bank_code',
      'bank_account',
      'activity_region',
      'birthday',
    ]);
    return user;
  },
  updateUserById: async (
    id: string,
    data: Pick<
      IUser,
      | 'username'
      | 'phone'
      | 'gender'
      | 'bank_code'
      | 'bank_account'
      | 'activity_region'
      | 'birthday'
    >,
  ) => {
    const user = await UserModel.findByIdAndUpdate(id, data, {
      runValidators: true,
      new: true,
    }).select([
      'username',
      'email',
      'phone',
      'gender',
      'email_verify',
      'phone_verify',
      'bank_code',
      'bank_account',
      'activity_region',
      'birthday',
    ]);
    return user;
  },
};

export default userService;