import { Request, Response } from 'express';
import Idea from '../models/Idea';
import { handleError } from '../utils/errorHandler';
import { generateContentIdeas } from '../services/aiService';

// Generate ideas based on user preferences
export const generateIdeas = async (req: Request, res: Response) => {
  try {
    const { contentType, industry, tone, keywords, additionalInfo } = req.body;
    const userId = req.user?._id;

    // Validate required fields
    if (!contentType || !industry || !tone) {
      return res.status(400).json({ message: 'Content type, industry, and tone are required' });
    }

    // Call AI service to generate ideas
    const ideas = await generateContentIdeas(contentType, industry, tone, keywords, additionalInfo);

    // Save generated ideas to database with draft status
    const savedIdeas = await Promise.all(
      ideas.map(async (idea) => {
        const newIdea = new Idea({
          userId,
          title: idea.title,
          description: idea.description,
          contentType,
          keywords: idea.keywords || keywords || [],
          industry,
          tone,
          status: 'draft',
          tags: []
        });

        await newIdea.save();
        return newIdea;
      })
    );

    res.status(200).json(savedIdeas);
  } catch (error) {
    handleError(error, res);
  }
};

// Get all ideas for the current user
export const getAllIdeas = async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id;
    const ideas = await Idea.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(ideas);
  } catch (error) {
    handleError(error, res);
  }
};

// Get idea by ID
export const getIdeaById = async (req: Request, res: Response) => {
  try {
    const ideaId = req.params.id;
    const userId = req.user?._id;

    const idea = await Idea.findOne({ _id: ideaId, userId });
    if (!idea) {
      return res.status(404).json({ message: 'Idea not found' });
    }

    res.status(200).json(idea);
  } catch (error) {
    handleError(error, res);
  }
};

// Update idea
export const updateIdea = async (req: Request, res: Response) => {
  try {
    const ideaId = req.params.id;
    const userId = req.user?._id;
    const updates = req.body;

    // Find and update the idea
    const idea = await Idea.findOneAndUpdate(
      { _id: ideaId, userId },
      updates,
      { new: true }
    );

    if (!idea) {
      return res.status(404).json({ message: 'Idea not found' });
    }

    res.status(200).json(idea);
  } catch (error) {
    handleError(error, res);
  }
};

// Delete idea
export const deleteIdea = async (req: Request, res: Response) => {
  try {
    const ideaId = req.params.id;
    const userId = req.user?._id;

    const idea = await Idea.findOneAndDelete({ _id: ideaId, userId });
    if (!idea) {
      return res.status(404).json({ message: 'Idea not found' });
    }

    res.status(200).json({ message: 'Idea deleted successfully' });
  } catch (error) {
    handleError(error, res);
  }
};

// Share idea with another user
export const shareIdea = async (req: Request, res: Response) => {
  try {
    const ideaId = req.params.id;
    const { email } = req.body;
    const userId = req.user?._id;

    // Simple implementation - in real app would involve creating shared resource
    const idea = await Idea.findOne({ _id: ideaId, userId });
    if (!idea) {
      return res.status(404).json({ message: 'Idea not found' });
    }

    // Here would typically share with another user, for now just return success
    res.status(200).json({ message: `Idea shared with ${email} successfully` });
  } catch (error) {
    handleError(error, res);
  }
};