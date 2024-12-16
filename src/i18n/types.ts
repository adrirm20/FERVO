export interface Translations {
  navigation: {
    home: string;
    explore: string;
    orders: string;
    profile: string;
  };
  common: {
    loading: string;
    error: string;
    filters: string;
    search: string;
    seeAll: string;
    welcome: string;
    whatDoYouNeed: string;
  };
  stats: {
    farmer: {
      orders: string;
      inProgress: string;
      completed: string;
    };
    driver: {
      deliveries: string;
      distance: string;
      rating: string;
    };
    supplier: {
      products: string;
      sales: string;
      rating: string;
    };
  };
  menu: {
    farmer: {
      crops: {
        title: string;
        description: string;
      };
      recurring: {
        title: string;
        description: string;
      };
      deliveries: {
        title: string;
        description: string;
      };
      payments: {
        title: string;
        description: string;
      };
      history: {
        title: string;
        description: string;
      };
      settings: {
        title: string;
        description: string;
      };
    };
    supplier: {
      store: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
      customers: {
        title: string;
        description: string;
      };
      inventory: {
        title: string;
        description: string;
      };
      shipping: {
        title: string;
        description: string;
      };
      settings: {
        title: string;
        description: string;
      };
    };
    driver: {
      zone: {
        title: string;
        description: string;
      };
      schedule: {
        title: string;
        description: string;
      };
      earnings: {
        title: string;
        description: string;
      };
      routes: {
        title: string;
        description: string;
      };
      stats: {
        title: string;
        description: string;
      };
      settings: {
        title: string;
        description: string;
      };
    };
  };
}