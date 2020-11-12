import UserAddress from '../models/UserAddress';
import User from '../models/Users';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(
        req.body,
      );

      const { id, name, email } = novoUser;

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Index - Show All
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json({
        user: req.userId,
        email: req.userEmail,
        users,
      });
    } catch (error) {
      return res.json(null);
    }
  }

  // Show - Specific User
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // Update - Change one user
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User not found!'],
        });
      }
      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Delete - Delete one user
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found!'],
        });
      }

      await user.destroy();

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async createAddress(req, res) {
    try {
      const userAddress = await UserAddress.create(req.body);

      if (!userAddress) {
        return res.status(400).json({
          errors: ['Address cannot be added'],
        });
      }

      return res.json(userAddress);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async getAddress(req, res) {
    const { id } = req.params;

    try {
      const userAddress = await UserAddress.findOne({ where: { user_id: id } });

      res.json(userAddress);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UserController();
