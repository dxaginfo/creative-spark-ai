import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Idea {
  id: string;
  title: string;
  description: string;
  contentType: string;
  keywords: string[];
  industry: string;
  tone: string;
  status: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface IdeasState {
  ideas: Idea[];
  currentIdea: Idea | null;
  isLoading: boolean;
  error: string | null;
  filters: {
    contentType: string | null;
    industry: string | null;
    status: string | null;
  };
}

const initialState: IdeasState = {
  ideas: [],
  currentIdea: null,
  isLoading: false,
  error: null,
  filters: {
    contentType: null,
    industry: null,
    status: null
  }
};

const ideasSlice = createSlice({
  name: 'ideas',
  initialState,
  reducers: {
    fetchIdeasStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchIdeasSuccess(state, action: PayloadAction<Idea[]>) {
      state.isLoading = false;
      state.ideas = action.payload;
      state.error = null;
    },
    fetchIdeasFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCurrentIdea(state, action: PayloadAction<Idea | null>) {
      state.currentIdea = action.payload;
    },
    addIdea(state, action: PayloadAction<Idea>) {
      state.ideas.unshift(action.payload);
    },
    updateIdea(state, action: PayloadAction<Idea>) {
      const index = state.ideas.findIndex(idea => idea.id === action.payload.id);
      if (index !== -1) {
        state.ideas[index] = action.payload;
      }
    },
    deleteIdea(state, action: PayloadAction<string>) {
      state.ideas = state.ideas.filter(idea => idea.id !== action.payload);
    },
    setFilters(state, action: PayloadAction<{
      contentType?: string | null;
      industry?: string | null;
      status?: string | null;
    }>) {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters(state) {
      state.filters = {
        contentType: null,
        industry: null,
        status: null
      };
    }
  }
});

export const {
  fetchIdeasStart,
  fetchIdeasSuccess,
  fetchIdeasFailure,
  setCurrentIdea,
  addIdea,
  updateIdea,
  deleteIdea,
  setFilters,
  clearFilters
} = ideasSlice.actions;

export default ideasSlice.reducer;
