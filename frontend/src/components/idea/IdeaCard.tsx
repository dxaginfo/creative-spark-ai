import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  CardActions,
  Tooltip,
  Divider
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Idea } from '../../store/slices/ideasSlice';

interface IdeaCardProps {
  idea: Idea;
  onSave: (id: string) => void;
  onEdit: (idea: Idea) => void;
  onDelete: (id: string) => void;
  onShare: (idea: Idea) => void;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onSave, onEdit, onDelete, onShare }) => {
  const {
    id,
    title,
    description,
    contentType,
    keywords,
    status,
    createdAt
  } = idea;

  const isSaved = status === 'saved' || status === 'scheduled' || status === 'published';
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const contentTypeColors: Record<string, string> = {
    blog: 'primary',
    social: 'secondary',
    video: 'error',
    newsletter: 'success'
  };

  const contentTypeLabels: Record<string, string> = {
    blog: 'Blog',
    social: 'Social Media',
    video: 'Video',
    newsletter: 'Newsletter'
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }} elevation={1}>
      <CardContent sx={{ flexGrow: 1, pb: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Chip
            label={contentTypeLabels[contentType] || 'Content'}
            color={contentTypeColors[contentType] as any || 'default'}
            size="small"
            sx={{ fontWeight: 500 }}
          />
          <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarTodayIcon sx={{ fontSize: 14, mr: 0.5 }} />
            {formattedDate}
          </Typography>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom fontWeight={600} sx={{ mt: 1 }}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description.length > 150 ? `${description.substring(0, 150)}...` : description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {keywords.slice(0, 3).map((keyword, index) => (
            <Chip
              key={`${keyword}-${index}`}
              label={keyword}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 1 }}
            />
          ))}
          {keywords.length > 3 && (
            <Chip
              label={`+${keywords.length - 3}`}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 1 }}
            />
          )}
        </Box>
      </CardContent>

      <Divider />

      <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
        <Box>
          <Tooltip title={isSaved ? 'Unsave' : 'Save'}>
            <IconButton onClick={() => onSave(id)} color={isSaved ? 'primary' : 'default'} size="small">
              {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton onClick={() => onEdit(idea)} size="small">
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box>
          <Tooltip title="Share">
            <IconButton onClick={() => onShare(idea)} size="small">
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => onDelete(id)} size="small" color="error">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
};

export default IdeaCard;
