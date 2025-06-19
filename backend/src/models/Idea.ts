import mongoose, { Document } from 'mongoose';

export interface IIdea extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  contentType: string;
  keywords: string[];
  industry: string;
  tone: string;
  status: string;
  tags: string[];
  scheduledDate?: Date;
  performance: {
    views: number;
    engagement: number;
    conversion: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const IdeaSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    contentType: {
      type: String,
      required: true,
      enum: ['blog', 'social', 'video', 'newsletter'],
      trim: true
    },
    keywords: [{
      type: String,
      trim: true
    }],
    industry: {
      type: String,
      required: true,
      trim: true
    },
    tone: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ['draft', 'saved', 'scheduled', 'published', 'archived'],
      default: 'draft'
    },
    tags: [{
      type: String,
      trim: true
    }],
    scheduledDate: {
      type: Date
    },
    performance: {
      views: {
        type: Number,
        default: 0
      },
      engagement: {
        type: Number,
        default: 0
      },
      conversion: {
        type: Number,
        default: 0
      }
    }
  },
  { timestamps: true }
);

// Add text index for searching
IdeaSchema.index(
  { title: 'text', description: 'text', keywords: 'text', tags: 'text' },
  { weights: { title: 10, description: 5, keywords: 3, tags: 2 } }
);

const Idea = mongoose.model<IIdea>('Idea', IdeaSchema);
export default Idea;
