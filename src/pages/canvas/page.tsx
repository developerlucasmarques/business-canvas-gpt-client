const Canvas: React.FC = () => {
  return (
    <main className="flex h-auto flex-1 flex-col items-center justify-center bg-white p-6 text-black md:p-12">
      <h1 className="mb-4 text-2xl font-bold uppercase text-blue-950">
        Modelo de negócios café
      </h1>
      <table
        id="bizcanvas"
        cellSpacing={0}
        border={1}
        className="overflow-hidden rounded-lg border-2 border-white bg-blue-200 shadow-md"
      >
        <tr>
          <td
            className="text-clip border-2 border-white"
            colSpan={2}
            rowSpan={2}
          >
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Key Partners
              </h4>
              <p>Who are our key partners?</p>
              <p>Who are our key suppliers?</p>
              <p>Which key resources are we acquiring from partners?</p>
              <p>Which key activities our partners perform?</p>
              <p>
                <strong>Motivation for partnerships</strong>
              </p>
              <p>
                Optimization and economy <br />
                Reduction of risk and uncertainty <br />
                Acquisition of particular resources and activities <br />
              </p>
            </div>
          </td>
          <td className="text-clip border-2 border-white" colSpan={2}>
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Key Activities
              </h4>
              <p>What key activities do our value propostions require?</p>
              <p>Our distribution channels?</p>
              <p>Customer relationships?</p>
              <p>Revenue Streams?</p>
              <p>
                <strong>Categories</strong>
              </p>
              <p>
                Production <br />
                Problem Solving <br />
                Platform/Network <br />
              </p>
            </div>
          </td>
          <td
            className="text-clip border-2 border-white"
            colSpan={2}
            rowSpan={2}
          >
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Value Proposition
              </h4>
              <p>Which value do we deliver to the customer?</p>
              <p>
                What bundles of products and services are we offering to each
                customer segment?
              </p>
              <p>Which customer needs are we satisfying?</p>
              <p>
                <strong>Characteristics</strong>
              </p>
              <p>
                Newness <br />
                Performance <br />
                Customization <br />
                Brand/Status <br />
                Price <br />
                Cost Reduction <br />
                Risk Reduction <br />
                Accessibility <br />
                Convenience/Usability <br />
              </p>
            </div>
          </td>
          <td className="text-clip border-2 border-white" colSpan={2}>
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Customer Relationship
              </h4>
              <p>What type of relationship each customer segment expects?</p>
              <p>Which ones have we established?</p>
              <p>How are they integrated with rest of the biz. model?</p>
              <p>How much they cost us?</p>
              <p>
                <strong>Examples</strong>
              </p>
              <p>
                Personal assistance
                <br />
                Self-service
                <br />
                Automated services
                <br />
                Communities
                <br />
                Co-creation
                <br />
              </p>
            </div>
          </td>
          <td
            className="text-clip border-2 border-white"
            colSpan={2}
            rowSpan={2}
          >
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Customer Segments
              </h4>
              <p>For whom are we creating value?</p>
              <p>Who are our most important customers?</p>
              <p>
                <strong>Examples</strong>
              </p>
              <p>
                Mass market
                <br />
                Niche market
                <br />
                Segmented
                <br />
                Diversified
                <br />
                Multi-sided platform
                <br />
              </p>
            </div>
          </td>
        </tr>

        <tr>
          <td className="text-clip border-2 border-white" colSpan={2}>
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Key Resources
              </h4>
              <p>What key resources our value proposition requires?</p>
              <p>Our distribution channels? Customer relationships?</p>
              <p>Revenue Streams?</p>
              <p>
                <strong>Types of resources</strong>
              </p>
              <p>
                Physical <br />
                Intellectual (brand, patents, copyrights, data) <br />
                Human <br />
                Financial
              </p>
            </div>
          </td>
          <td className="text-clip border-2 border-white" colSpan={2}>
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Channels
              </h4>
              <p>
                Through which channels our customer segments want to be reached?
              </p>
              <p>How are we reaching them now?</p>
              <p>How are channels integrated?</p>
              <p>Which ones work best?</p>
              <p>Which ones are most cost efficient?</p>
              <p>How are we integrating them with customer routines?</p>
            </div>
          </td>
        </tr>
        <tr>
          <td className="text-clip border-2 border-white" colSpan={5}>
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Cost Structure
              </h4>
              <p>
                What are most important costs inherent to our business model?
              </p>
              <p>Which key resources are most expensive?</p>
              <p>Which key activities are most expensive?</p>
              <p>
                <strong>Is your business more?</strong>
              </p>
              <p>
                Cost driven(cost structure, low price prop, maximum automation,
                extensive outsourcing)
              </p>
              <p>
                Value driven (focused on value creation, premium value prop)
              </p>
            </div>
          </td>
          <td className="text-clip border-2 border-white" colSpan={5}>
            <div className="flex flex-col items-center justify-start px-1 py-2 text-center">
              <h4 className="text-lg font-bold uppercase text-blue-500">
                Revenue Streams
              </h4>
              <p>For what value are our customers willing to pay?</p>
              <p>What are they currently paying for?</p>
              <p>How are they paying?</p>
              <p>How would they prefer to pay?</p>
              <p>How much each revenue stream contributes overall?</p>
            </div>
          </td>
        </tr>
      </table>
    </main>
  )
}

export default Canvas
