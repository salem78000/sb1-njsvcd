import { useQuery } from 'react-query';
import { fetchContent, fetchSingleType, fetchCollection } from '../lib/api';

export const useHomePage = () => {
  return useQuery('home', () => fetchSingleType('home'));
};

export const useServices = () => {
  return useQuery('services', () => fetchCollection('services'));
};

export const useBlogPosts = () => {
  return useQuery('blog-posts', () => fetchCollection('blog-posts'));
};

export const useProjects = () => {
  return useQuery('projects', () => fetchCollection('projects'));
};

export const useAbout = () => {
  return useQuery('about', () => fetchSingleType('about'));
};

export const useContact = () => {
  return useQuery('contact', () => fetchSingleType('contact'));
};