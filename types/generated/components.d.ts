import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBodyMdx extends Struct.ComponentSchema {
  collectionName: 'components_shared_body_mdxes';
  info: {
    displayName: 'bodyMDX';
    icon: 'book';
  };
  attributes: {
    bodyMDX: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_feature_grids';
  info: {
    displayName: 'hero-feature-grid';
    icon: 'grid';
  };
  attributes: {
    badge: Schema.Attribute.String;
    featureItem: Schema.Attribute.Component<'shared.features', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['top', 'bottom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'top'>;
  };
}

export interface SharedHeroOverlay extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_overlays';
  info: {
    displayName: 'hero-overlay';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    primaryButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    primaryButtonUrl: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryButtonText: Schema.Attribute.String;
    secondaryButtonUrl: Schema.Attribute.String;
    subheading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHeroSplit extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_splits';
  info: {
    displayName: 'hero-split';
    icon: 'picture';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    imageSide: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    primaryButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    primaryButtonUrl: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://example.com'>;
    secondaryButtonText: Schema.Attribute.String;
    secondaryButtonUrl: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'quote';
    icon: 'indent';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    role: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedTextMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_medias';
  info: {
    displayName: 'text-media';
    icon: 'layout';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    imageSide: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.body-mdx': SharedBodyMdx;
      'shared.features': SharedFeatures;
      'shared.hero-feature-grid': SharedHeroFeatureGrid;
      'shared.hero-overlay': SharedHeroOverlay;
      'shared.hero-split': SharedHeroSplit;
      'shared.quote': SharedQuote;
      'shared.seo': SharedSeo;
      'shared.text-media': SharedTextMedia;
    }
  }
}
