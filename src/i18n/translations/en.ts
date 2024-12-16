import { Translations } from '../types';

const translations: Translations = {
  navigation: {
    home: 'Home',
    explore: 'Explore',
    orders: 'Orders',
    profile: 'Profile'
  },
  common: {
    loading: 'Loading...',
    error: 'An error has occurred',
    filters: 'Filters',
    search: 'Search',
    seeAll: 'See All',
    quickAccess: 'Quick Access',
    welcome: 'Welcome! 👋',
    whatDoYouNeed: 'What do you need today?'
  },
  categories: {
    title: 'Categories',
    seeds: 'Seeds',
    machinery: 'Machinery',
    tools: 'Tools',
    feed: 'Feed',
    irrigation: 'Irrigation',
    fertilizers: 'Fertilizers'
  },
  featured: {
    title: 'Featured Products',
    seasonal: {
      title: '🌾 Seasonal Offers',
      subtitle: 'Discover our special offers on seasonal products'
    }
  },
  quickAccess: {
    orders: 'My Orders',
    offers: 'Offers'
  },
  menu: {
    farmer: {
      crops: {
        title: 'My Crops',
        description: 'Manage your crops and livestock'
      },
      recurring: {
        title: 'Recurring Orders',
        description: 'Set up periodic deliveries'
      },
      deliveries: {
        title: 'Deliveries',
        description: 'Track your incoming orders'
      },
      payments: {
        title: 'Payments',
        description: 'Manage your transactions'
      },
      history: {
        title: 'History',
        description: 'View past orders and activities'
      },
      settings: {
        title: 'Settings',
        description: 'Configure your preferences'
      }
    }
  },
  stats: {
    farmer: {
      orders: {
        label: 'Recent Orders',
        active: 'Active Orders',
        inProgress: 'In Progress',
        completed: 'Completed'
      }
    }
  },
  farmer: {
    crops: {
      title: 'My Crops',
      subtitle: 'Manage your crops and fields',
      addNew: 'Add New Crop',
      filters: {
        type: 'Type',
        status: 'Status',
        season: 'Season'
      },
      actions: {
        water: 'Water',
        fertilize: 'Fertilize',
        harvest: 'Harvest',
        waterSuccess: 'Watering completed successfully',
        fertilizeSuccess: 'Fertilization completed successfully',
        harvestSuccess: 'Harvest completed successfully',
        waterError: 'Error while watering',
        fertilizeError: 'Error while fertilizing',
        harvestError: 'Error while harvesting'
      }
    }
  },
  recurring: {
    title: 'Recurring Orders',
    subtitle: 'Manage your periodic deliveries',
    empty: 'You have no recurring orders set up',
    addNew: 'New Recurring Order',
    frequency: {
      title: 'Frequency',
      weekly: 'Weekly',
      biweekly: 'Biweekly',
      monthly: 'Monthly'
    },
    status: {
      active: 'Active',
      paused: 'Paused',
      cancelled: 'Cancelled'
    },
    actions: {
      edit: 'Edit',
      pause: 'Pause',
      resume: 'Resume',
      cancel: 'Cancel',
      delete: 'Delete'
    },
    nextDelivery: 'Next delivery',
    total: 'Monthly total'
  }
};

export default translations;