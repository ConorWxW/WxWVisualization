import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Graph from 'graphology'
import Sigma from 'sigma' 

const graph = new Graph();
graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
graph.addEdge("1", "2", { size: 5, color: "purple" });

const sigmaInstance = new Sigma(graph, document.getElementById("container"));

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="container" style={{ width: "400px", height: "400px" }}>
          <script src="/graphy.js"></script>
        </div>
        
      </main>

      <Footer />
    </div>
  )
}
