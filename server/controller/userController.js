import User from "../model/userModel.js";

// Create a new user
export const create = async (req, res) => {
  try {
    // 1. Destructure data from req.body first
    const { name, email, address } = req.body;

    // 2. Check if a user with this email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User with this email already exists" });
    } 

    // 3. Create and save the new user
    const newUser = new User({ name, email, address });
    const saveData = await newUser.save();
    
    res.status(201).json(saveData); // 201 Created is standard for successful creation
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if(!userData || userData.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(userExists);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


// Update a user by ID
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    } 
    await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};  

   
/*

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id              );  
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  */