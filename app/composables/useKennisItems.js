const kennisItems = [
    {
        slug: 'netcongestie-van-knelpunt-naar-kans',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Netcongestie: van knelpunt naar kans',
        intro: 'Hoe lokale samenwerking ruimte kan creëren op een steeds voller elektriciteitsnet.',
        tags: ['netcongestie', 'samenwerking'],
        publishedAt: '2025-01-14',
    },
    {
        slug: 'slimmer-sturen-op-lokaal-energiegebruik',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Slimmer sturen op lokaal energiegebruik',
        intro: 'Praktische voorbeelden van vraagsturing die piekbelasting verlaagt.',
        tags: ['netcongestie', 'lokale-energieoplossingen'],
        publishedAt: '2025-02-03',
    },
    {
        slug: 'energiehubs-als-versneller-voor-de-regio',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Energiehubs als versneller voor de regio',
        intro: 'Waarom collectieve oplossingen bedrijven en netbeheerders vooruithelpen.',
        tags: ['energiehubs', 'samenwerking'],
        publishedAt: '2025-02-18',
    },
    {
        slug: 'data-als-kompas-voor-netcapaciteit',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Data als kompas voor netcapaciteit',
        intro: 'Met inzicht in verbruik en opwek worden betere keuzes mogelijk.',
        tags: ['data-digitalisering', 'netcongestie'],
        publishedAt: '2025-03-05',
    },
    {
        slug: 'van-pilot-naar-schaalbare-aanpak',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Van pilot naar schaalbare aanpak',
        intro: 'Wat nodig is om succesvolle initiatieven structureel uit te rollen.',
        tags: ['innovatie', 'energiehubs'],
        publishedAt: '2025-03-21',
    },
    {
        slug: 'samenwerken-aan-een-toekomstbestendig-net',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Samenwerken aan een toekomstbestendig net',
        intro: 'De rol van overheid, ondernemers en netbeheerders in de energietransitie.',
        tags: ['samenwerking', 'netcongestie'],
        publishedAt: '2025-04-02',
    },
    {
        slug: 'subsidies-die-de-transitie-versnellen',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Subsidies die de transitie versnellen',
        intro: 'Een overzicht van regelingen die investeringen in energieoplossingen aantrekkelijker maken.',
        tags: ['subsidies-financiering', 'innovatie'],
        publishedAt: '2025-04-15',
    },
    {
        slug: 'financiering-vinden-voor-lokale-projecten',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Financiering vinden voor lokale projecten',
        intro: 'Welke routes ondernemers kunnen bewandelen om initiatieven van de grond te krijgen.',
        tags: ['subsidies-financiering', 'lokale-energieoplossingen'],
        publishedAt: '2025-04-28',
    },
    {
        slug: 'lokale-opwek-slim-combineren-met-opslag',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Lokale opwek slim combineren met opslag',
        intro: 'Hoe batterijen pieken opvangen en het net structureel ontlasten.',
        tags: ['lokale-energieoplossingen', 'netcongestie'],
        publishedAt: '2025-05-09',
    },
    {
        slug: 'digitale-tweeling-van-het-energienet',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Digitale tweeling van het energienet',
        intro: 'Simulaties helpen netbeheerders knelpunten te voorspellen voordat ze ontstaan.',
        tags: ['data-digitalisering', 'innovatie'],
        publishedAt: '2025-05-22',
    },
    {
        slug: 'innovatie-uit-de-praktijk-vijf-voorbeelden',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Innovatie uit de praktijk: vijf voorbeelden',
        intro: 'Bedrijven die met slimme technologie het verschil maken op het net.',
        tags: ['innovatie', 'data-digitalisering'],
        publishedAt: '2025-06-04',
    },
    {
        slug: 'hoe-energiehubs-bedrijventerreinen-veranderen',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Hoe energiehubs bedrijventerreinen veranderen',
        intro: 'Gedeelde infrastructuur maakt groei mogelijk zonder extra netaansluiting.',
        tags: ['energiehubs', 'lokale-energieoplossingen'],
        publishedAt: '2025-06-17',
    },
    {
        slug: 'publiek-private-samenwerking-in-de-praktijk',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Publiek-private samenwerking in de praktijk',
        intro: 'Wat gemeenten en bedrijven van elkaar kunnen leren bij netuitbreiding.',
        tags: ['samenwerking', 'subsidies-financiering'],
        publishedAt: '2025-06-30',
    },
    {
        slug: 'meetdata-beter-benutten-voor-netbeheer',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'Meetdata beter benutten voor netbeheer',
        intro: 'Real-time inzicht zorgt voor snellere en preciezere beslissingen.',
        tags: ['data-digitalisering', 'netcongestie'],
        publishedAt: '2025-07-11',
    },
    {
        slug: 'de-toekomst-van-lokale-energiemarkten',
        thumbnail: '/images/kennis.png',
        banner: '/images/kennis.png',
        heading: 'De toekomst van lokale energiemarkten',
        intro: 'Waarom buurten steeds vaker hun eigen energie verhandelen en delen.',
        tags: ['lokale-energieoplossingen', 'innovatie'],
        publishedAt: '2025-07-24',
    },
]

/**
 * Available filter categories. `value` must match the strings used
 * inside each article's `tags` array — this is the single source of
 * truth for filter labels and their display order in the fieldset.
 */
const kennisFilters = [
    { value: 'netcongestie', label: 'Netcongestie' },
    { value: 'energiehubs', label: 'Energiehubs' },
    { value: 'subsidies-financiering', label: 'Subsidies & financiering' },
    { value: 'lokale-energieoplossingen', label: 'Lokale energieoplossingen' },
    { value: 'samenwerking', label: 'Samenwerking' },
    { value: 'data-digitalisering', label: 'Data & digitalisering' },
    { value: 'innovatie', label: 'Innovatie' },
]

/**
 * Central source of truth for all "kennis" (knowledge) articles.
 * Used by: the homepage teaser (Kennis.vue), the dedicated /kennis
 * overview page, and individual article detail pages.
 */
export function useKennisItems() {
    return {
        items: kennisItems,
        filters: kennisFilters,
        getBySlug: (slug) => kennisItems.find((item) => item.slug === slug),
    }
}