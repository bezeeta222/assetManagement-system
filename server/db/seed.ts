import { funds } from "./schema"
import { useDb } from "../utils/db"
import { nanoid } from "../utils/nanoid"
import {
  generateFakeNavPrice,
  type GenerateFakeNavPriceParams,
  generateYtdHistory,
  getCurrentYtd,
} from "~/server/utils/faker"

type Fund = typeof funds.$inferInsert

type GenerateDataParams = Omit<
  Fund,
  | "ytdHistory"
  | "navHistory"
  | "currentYtd"
  | "currentNav"
  | "inceptionDate"
  | "launchPrice"
> &
  Omit<GenerateFakeNavPriceParams, "startingPrice" | "volatility">

function generateData({
  startDate,
  endDate,
  ...rest
}: GenerateDataParams): Fund {
  const navHistory = generateFakeNavPrice({
    startDate,
    endDate,
    startingPrice: 0.5,
    volatility: 0.06,
  })
  const ytdHistory = generateYtdHistory(navHistory, 100)
  const currentYtd = getCurrentYtd(ytdHistory)
  const currentNav = navHistory[navHistory.length - 1][1]

  return {
    ...rest,
    ytdHistory,
    navHistory,
    currentYtd,
    currentNav,
    launchPrice: 0.5,
    inceptionDate: new Date(startDate),
  }
}

const data: Fund[] = [
  generateData({
    startDate: "2020-07-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Gotham Absolute Return Fund",
    ticker: "GOTARF",
    description:
      "Founded by Bruce Wayne, Gotham Absolute Return Fund is a long/short equity fund that aims to generate positive returns in all market conditions.",
    investmentType: "Growth",
    isShariah: true,
  }),
  generateData({
    startDate: "2018-12-30",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "BlackRock Global Funds - World Technology Fund A2 USD",
    ticker: "BLRKGF",
    description:
      "BlackRock Global Funds - World Technology Fund A2 USD is an open-end fund incorporated in Luxembourg. The Fund's objective is to maximize total return. The Fund invests globally at least 70% of its total assets in the equity securities of companies whose predominant economic activity is in the technology sector.",
    investmentType: "Income",
    isShariah: false,
  }),
  generateData({
    startDate: "2019-01-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Maybank Islamic Asia Pacific REITs Fund",
    ticker: "MBIAPR",
    description:
      "Maybank Islamic Asia Pacific REITs Fund is an Islamic income and growth fund that aims to provide regular income and medium to long-term capital growth by investing in Shariah-compliant real estate investment trusts (REITs) and Islamic real estate investment trusts (I-REITs) listed on stock exchanges in the Asia Pacific region.",
    investmentType: "Income & Growth",
    isShariah: true,
  }),
  generateData({
    startDate: "2019-12-15",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Joker Profit Fund",
    ticker: "JOKRPF",
    description:
      "Joker Profit Fund is an income and growth fund that aims to provide regular income and medium to long-term capital growth by investing in real estate investment trusts (REITs) listed on stock exchanges in the Asia Pacific region.",
    investmentType: "Income & Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2020-02-04",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Wayne Enterprises Fund",
    ticker: "WYNTPF",
    description:
      "Wayne Enterprises Fund focuses on investing in companies that are involved in the development, manufacture, distribution, supply, or sale of medical devices and related technologies. The Fund invests in companies that are involved in the development, manufacture, distribution, supply, or sale of medical devices and related technologies.",
    investmentType: "Income & Growth",
    isShariah: true,
  }),
  generateData({
    startDate: "2018-08-28",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Asset Growth Fund",
    ticker: "ASSTGF",
    description:
      "Asset Growth Fund is a conventional growth fund that aims to achieve medium to long-term capital growth by investing in a diversified portfolio of equity-related securities.",
    investmentType: "Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2020-03-11",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Global Sukuk Fund",
    ticker: "GLBSKF",
    description:
      "Global Sukuk Fund is an Islamic income fund that aims to provide regular income by investing in a diversified portfolio of Shariah-compliant sukuk and Islamic debt securities.",
    investmentType: "Income",
    isShariah: true,
  }),
  generateData({
    startDate: "2019-05-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "	Advantage Global Equity Volatility Focused AUD Hedged Class",
    ticker: "ADVGLO",
    description:
      "The Fund aims to provide long term total return from a combination of income and capital growth by investing in a portfolio of global equities. The Fund seeks to achieve its investment objective by investing a minimum of 95% of its NAV will be invested in the HSBC Global Investment Funds - Global Equity Volatility Focused (Target Fund) at all times. This implies that the Fund has a passive strategy. Up to 5% of the Fund's NAV will be invested in Cash and/or liquid assets.",
    investmentType: "Income",
    isShariah: true,
  }),
  generateData({
    startDate: "2021-03-15",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Tech Growth Fund",
    ticker: "TECHGF",
    description:
      "Tech Growth Fund focuses on investing in technology companies with high growth potential. The fund aims to capitalize on emerging technologies and innovation.",
    investmentType: "Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2020-06-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Global Healthcare Fund",
    ticker: "GLBHLTF",
    description:
      "Global Healthcare Fund is dedicated to investing in healthcare-related companies worldwide. It seeks to capture opportunities in pharmaceuticals, biotechnology, medical devices, and healthcare services.",
    investmentType: "Income & Growth",
    isShariah: true,
  }),
  generateData({
    startDate: "2019-08-20",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Green Energy Fund",
    ticker: "GRNENGF",
    description:
      "Green Energy Fund specializes in investing in renewable energy companies involved in solar, wind, hydro, and other sustainable energy sources. The fund aims to support the transition to clean energy.",
    investmentType: "Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2022-01-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Asia Pacific Infrastructure Fund",
    ticker: "ASIAINF",
    description:
      "Asia Pacific Infrastructure Fund focuses on investments in infrastructure projects across the Asia Pacific region. It targets sectors such as transportation, energy, telecommunications, and utilities.",
    investmentType: "Income",
    isShariah: true,
  }),
  generateData({
    startDate: "2020-11-10",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Global Real Estate Fund",
    ticker: "GLBRETF",
    description:
      "Global Real Estate Fund invests in a diversified portfolio of real estate assets globally. It targets income and capital appreciation from properties including residential, commercial, and industrial.",
    investmentType: "Income & Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2018-10-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Emerging Markets Fund",
    ticker: "EMERGF",
    description:
      "Emerging Markets Fund focuses on investing in companies located in emerging market countries. It seeks to capitalize on the growth potential of economies in regions such as Asia, Latin America, Africa, and Eastern Europe.",
    investmentType: "Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2019-12-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Global Dividend Fund",
    ticker: "GLBDIV",
    description:
      "Global Dividend Fund invests in companies worldwide that have a track record of paying dividends to shareholders. It aims to provide investors with a regular income stream and long-term capital appreciation.",
    investmentType: "Income",
    isShariah: true,
  }),
  generateData({
    startDate: "2020-04-15",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Technology Innovation Fund",
    ticker: "TECHINN",
    description:
      "Technology Innovation Fund focuses on investing in innovative technology companies that are disrupting traditional industries. It aims to capture opportunities in areas such as artificial intelligence, cloud computing, and digital transformation.",
    investmentType: "Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2021-01-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Global Bond Fund",
    ticker: "GLBBOND",
    description:
      "Global Bond Fund invests in a diversified portfolio of fixed-income securities issued by governments, corporations, and other entities worldwide. It aims to provide investors with regular income and capital preservation.",
    investmentType: "Income",
    isShariah: true,
  }),
  generateData({
    startDate: "2019-07-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "European Equity Fund",
    ticker: "EUREQTY",
    description:
      "European Equity Fund focuses on investing in publicly traded companies based in Europe. It seeks to capitalize on opportunities in various sectors across European markets.",
    investmentType: "Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2020-02-20",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Global Consumer Staples Fund",
    ticker: "GLBCONS",
    description:
      "Global Consumer Staples Fund invests in companies that produce essential consumer goods such as food, beverages, household products, and personal care items. It aims to provide stability and consistent returns.",
    investmentType: "Income",
    isShariah: true,
  }),
  generateData({
    startDate: "2018-09-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Asia Pacific Growth Fund",
    ticker: "ASIAGF",
    description:
      "Asia Pacific Growth Fund focuses on investing in high-growth companies located in the Asia Pacific region. It aims to capitalize on the economic growth and development of emerging markets in Asia.",
    investmentType: "Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2021-05-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Global Healthcare Innovation Fund",
    ticker: "GLBHCIN",
    description:
      "Global Healthcare Innovation Fund invests in companies that are pioneering innovations in healthcare technologies, treatments, and services. It aims to generate long-term growth by capitalizing on advancements in the healthcare industry.",
    investmentType: "Growth",
    isShariah: true,
  }),
  generateData({
    startDate: "2020-11-15",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "Natural Resources Fund",
    ticker: "NATRES",
    description:
      "Natural Resources Fund focuses on investing in companies involved in the extraction, processing, and distribution of natural resources such as energy, metals, and agriculture. It aims to benefit from global demand for essential commodities.",
    investmentType: "Income & Growth",
    isShariah: false,
  }),
  generateData({
    startDate: "2019-03-01",
    endDate: "2023-10-15",
    id: nanoid(),
    name: "US Small Cap Fund",
    ticker: "USSMCP",
    description:
      "US Small Cap Fund focuses on investing in small-cap companies based in the United States. It aims to capitalize on the growth potential and market opportunities of small-cap stocks in various sectors of the US economy.",
    investmentType: "Growth",
    isShariah: true,
  }),
]

async function main() {
  await useDb().delete(funds)

  const storedFunds = await useDb().insert(funds).values(data).returning().all()


  process.exit(0)
}

main()
