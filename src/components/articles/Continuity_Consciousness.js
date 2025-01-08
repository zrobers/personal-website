import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleTemplate = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/thought-leadership');
  };

  return (
    <div style={styles.container}>
      {/* Back Button at Top */}
      <button onClick={goBack} style={styles.backButtonTop}>
        &larr; Back
      </button>

      {/* Article Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Continuity and Consciousness</h1>
        <p style={styles.subtitle}>Zachary Robers</p>
        <p style={styles.subtitle}>July 2024</p>
        <img 
          src="/images/article-images/consciousness.jpg" 
          alt="Placeholder for article image" 
          style={styles.heroImage} 
        />
      </header>

      {/* Article Body */}
      <article style={styles.article}>

        {/* Introduction */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Introduction</h2>
          <p>
          Newton’s law of universal gravitation exemplifies continuous interdependence in physical systems. At a planetary level, the law demonstrates how celestial bodies, as they move through time and space, exert continuous gravitational influences on one another, thereby altering each other’s positions<sup style={styles.sup}>1</sup>. Thus, the evolution of a body’s location depends on the movement of other bodies and vice versa. Such continuous interdependence often arises from conservation laws and is described using partial differential equations (PDEs). One such example is the bobbing motion of a boat partially submerged in shallow water<sup style={styles.sup}>2</sup>. Here, the boat’s vertical displacement evolves over time with respect to the velocity and height of the fluid, conserving the system’s energy globally. 
          </p>
          <br />
          <p>
          This concept of continuous interdependence, as seen in universal gravitation and the boat problem, can be extended to neural processes. The first section of the following work serves to establish reasonable neuroscientific grounds to consider neural processes as continuous in space and time. From here, brain waves and mental processes can be considered a massive, interdependent nonlinear system propagating continuously in space and time. Analogous to how celestial bodies in a solar system exert gravitational pull on each other, the electrical impulses fired in one’s brain are posited to invoke a continuous influence on the voltage and spatial location of other impulses throughout the brain.
          </p>
          <br />
          <p>
          This perspective on neural processes has strong implications on the hard problem of consciousness. Coined by David Chalmers in his seminal work “Facing Up to the Problem of Consciousness”, the hard problem asks: How is it that humans are capable of a rich, subjective experience<sup style={styles.sup}>3</sup>? While this work does not directly answer the hard problem, it ventures as far to claim that the continuous interdependence of neural firings is a necessary condition for a sufficient explanation of rich, subjective experience. 
          </p>
          <br />
          <p>
          Subsequently, using Chalmers’ notion of combinatorial-state automata (CSA), it is shown that this condition serves as an external objection to the possibility of machine consciousness. Unlike internal objections like John Searle’s Chinese room experiment, which concede that computers can simulate human behavior, external objections pose a barrier preventing computational systems from behaving like cognitive systems. Here, the barrier is physical and mathematical rather than philosophical. Following a modus tollens structure, it is first shown that all machine computation is reducible to a CSA, a notion of computation proposed by Chalmers. The argument continues by demonstrating the incompatibility of CSA with the continuous interdependence of neural firings. Since the continuous interdependence of neural firings previously is deemed necessary for consciousness, the conclusion that artificial intelligences constrained by modern computing techniques are incapable of possessing consciousness follows. Lastly, a quantum approach to neural simulation is proposed as an alternative framework which remains compatible with the possibility of machine consciousness.
          </p>
        </section>

        {/* Neuroscientific Basis for Continuity */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Neuroscientific Basis for Continuity</h2>
          <p>
          While the inner-workings of the brain remain elusive to the scientific community, hence the hard problem of consciousness, there is support among neuroscientists for the notion of continuity in space and time within the brain. At an abstract level, the human sensory experience, as produced by our brains, seems continuous. Friston’s free energy principle attributes this fact to continuous prediction and minimization between expected and actual inputs, thereby supporting the notion of continuous neural activity<sup style={styles.sup}>4</sup>. 
          </p>
          <br />
          <p>
          At a more fundamental level, although action potentials—characterizing electrical communication among neurons—are most often described in a discrete sense, there are also competing theories on the behavior of individual neurons. Christof Koch’s “Biophysics of Computation: Information Processing in Single Neurons” claims that neuronal communication involves continuous interplay between synapses, dendrites, and ionic events<sup style={styles.sup}>5</sup>. 
          </p>
          <br />
          <p>
          This work does not aim to propose a unified brain theory. Instead, the purpose of these claims is to provide reasonable grounds for interpreting neural processes as a continuously interdependent system, as this perspective significantly impacts the discussion on machine consciousness.
          </p>
        </section>

        {/* Continuous Interdependence */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Continuous Interdependence</h2>
          <p>
          Interdependence is a hallmark of Integrated Information Theory (IIT). Developed by Giulio Tononi at University of Wisconsin, IIT posits that a high degree of interdependence among the states of a system is necessary for the felt quality of consciousness<sup style={styles.sup}>6</sup>. In simpler terms, an extensive web of interaction among neural firings is required for humans to feel conscious.
          </p>
          <br />
          <p>
          While IIT demonstrates the need for interdependence, continuous interdependence remains a much stronger requirement for consciousness that has yet to be formally justified. In the introduction, continuous interdependence in neural systems was introduced through an analogy to physical systems. The core idea is that as brain waves propagate through space and time, they exert a continuous influence on other brain waves, essentially functioning as a richly interwoven nonlinear system. Continuous interdependence, therefore, suggests a much higher degree of integrated information than any discrete model. 
          </p>
          <br />
          <p>
          Susan Schneider’s work in testing for machine consciousness uses a quantitative measure (Φ) to assess the level of integration within a neural system<sup style={styles.sup}>7</sup>. A higher Φ is associated with increased likelihood of consciousness, guiding assessments of whether an artificial intelligence is likely to have obtained consciousness. While Schneider’s work is largely a matter of prediction, accepting Φ as a sufficient or necessary determinant of consciousness, in accordance with IIT, lends way to a boundary problem in need of reconciliation. If one is to accept Φ as a sufficient or necessary determinant of consciousness, there must exist a value of Φ at which consciousness or the possibility of consciousness is achieved. Even if one adopts the viewpoint that consciousness is a spectrum, the existence of extraordinarily simple discrete neural networks which cannot be reasonably assessed to have any degree of consciousness suggests that there must be a finite boundary at which some degree of consciousness or possibility for consciousness is achieved. As many others have noted in different contexts, the notion of a finite boundary for consciousness seems ridiculous since it implies that adding one more transistor or neural pathway would be the deciding factor to sway a system towards consciousness. 
          </p>
          <br />
          <p>
          Thus, one finds themself at a loss. In order to achieve consciousness, IIT mandates a high degree of integration, but the preceding reasoning suggests any finite threshold for consciousness in terms of integration is unreasonable. Continuous interdependence sidesteps this issue. The constant influence of brain waves on other neural activity implies there is an infinitely stronger degree of integration compared to any discrete system. Thus, continuous interdependence avoids this boundary conflict on Φ by infinitely increasing the degree of integration. Lacking another resolution to this dilemma, such an approach seems the only sufficient means to provide a model with compatible integration for consciousness. 
          </p>
        </section>

        {/* Combinatorial-State Automata */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Combinatorial-State Automata (CSA)</h2>
          <p>
            To illustrate the incompatibility of continuous interdependence, and thus consciousness, with machine computation, I proceed by introducing David Chalmers’ notion of combinatorial-state automaton (CSA)<sup style={styles.sup}>8</sup>. A CSA is an account of computation which is slightly more structured than the more traditional finite-state automaton (FSA). Like FSAs, a CSA is specified using either finite or infinite sets of inputs, outputs, and internal states. Unlike FSAs, the inputs, outputs, and states of a CSA are vectorized. On the nature of each element of a CSA, Chalmers writes:
          </p>
          <br />
          <p style={{ marginLeft: '2em' }}>
            Each element S<sup>i</sup> can take on a finite number of values S<sub>ij</sub>, where S<sub>ij</sub> is the j<sup>th</sup> possible value of the i<sup>th</sup> element.
          </p>
          <br />
          <p>
            Furthermore, the implementation of a CSA entails a mapping of the states in the system onto the states of the computation described by the CSA such that causally-related physical states map to formally-related computational states.
          </p>
          <br />
          <p>
            For conceivable machine-based computations, Chalmers’ model is by all means a desirable formalism for a computation. Constrained by the finite capacity of storage devices and the discrete nature of transistors, inputs, outputs, and states of a computer program fall nicely into the structured vector format of the CSA. While it is debatable whether machines can even utilize the infinite bounds on the number of elements in a CSA, this distinction is not argued here. Rather, it is simply stipulated that any binary computer program can be described at any point during its execution using a vector for its inputs, a vector for outputs, and a vector for its internal states.
          </p>
        </section>

        {/* Incompatibility of Neural Processes and CSA */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Incompatibility of Neural Processes and CSA</h2>
          <p>
          Operating under the framework of continuous interdependence greatly complicates the process of representing neural processes with CSA. The primary obstacle lies in the notion of countability. Borrowing from mathematics, a set is countable if it can be made in one-to-one correspondence with the natural numbers. Returning to the description of each element within a state, it is clear that Chalmers’ formalism for computation implies countability. The notation Sij which uses the indexes j and i to represent the jth possible value of the ith element is a clear indication that there exists a one to one correspondence between the natural numbers and the elements and possible states for each element. Furthermore, countability is a necessary measure to describe the mapping from one state in a CSA to another. 
          </p>
          <br />
          <p>
          Continuity, however, is incompatible with countability. On any given range of the real numbers, there exists a larger range of possible values than can be represented by all the natural numbers. Such logic is the basis for different degrees of infinity. Consequently, it would be mathematically inconceivable to assign a natural number to each of the possible states for an element for a supposed CSA of a continuously interconnected system. Along these same lines, continuity implies an uncountable number of transitions between states which is also inconceivable under Chalmers’ framework. Furthermore, the idea that the continuous evolution of neural processes could be succinctly captured in a manner analogous to solving a system of differential equations is undermined by the inherent complexity and nonlinearity of such a vast system. Ergo, under the viewpoint that neural processes evolve as continuous waves within space and time, reducibility to a CSA is a conceptual impossibility.   
          </p>
          <br />
          <p>
          Computational mathematics often supplies the means to surmount the incompatibility of continuity and countability. In the face of nonlinear systems of PDEs, such as the bobbing boat referenced in the introduction, numerical techniques such as finite element and finite difference methods provide a suitable means of approximating the evolution of a computation characterized by continuous interdependence. However, these methods inevitably have numerical errors from finite representations of irrational numbers. More so, as systems become larger and more interwoven, the cascade effect causes numerical error to magnify. Given that the human brain consists of over 100 trillion synaptic connections with a single neuron capable of launching as many as 1000 electrochemical signals per second, the cascade effect of numerical error would prove detrimental to a numerical model’s capability to fully represent the dynamics of neural processes<sup style={styles.sup}>9</sup>. Thus, any effort to discretize a continuously interdependent model of neural processes would prove incompatible with maintaining the level of integration needed for consciousness.  
          </p>
          <br />
          <p>
          Ergo, this conclusion completes the modus tollens argument against machine consciousness. The irreducibility of neural computation down to combinatorial-state automaton coupled with the reducibility of machine computation down to combinatorial-state automaton suggests that machine implementation of the brain as a continuously interdependent system is not viable. Applying the Integrated Information Theory-based argument for the necessity of continuous interdependence for consciousness, this argument serves as a rebuke on the notion of machine consciousness.   
          </p>
        </section>

         {/* A Quantum Framework for Consciousness */}
         <section style={styles.section}>
          <h2 style={styles.sectionTitle}>A Quantum Framework for Consciousness</h2>
          <p>
          The previous argument for the reducibility of machine computation to CSA operates under the framework of a binary computer as is the industry standard for even the most complex artificial intelligence models. However, advances in the field of quantum computing may yield the capability to represent neural processes as a continuously interdependent system. The quantum principles of superposition and entanglement naturally lend way to new representations of continuity and interconnectedness<sup style={styles.sup}>10</sup>. Superposition, which describes the ability of quantum bits or qubits to represent multiple states simultaneously, theoretically enables a single qubit to represent a continuum of values. Furthermore, the principle of entanglement offers the means to simultaneously manipulate qubits, essentially linking qubits together without it being necessary for them to be physically close together. 
          </p>
          <br />
          <p>
          If computer scientists and engineers prove capable of utilizing the full powers of quantum computing, superposition and entanglement could prove a viable approach to representing the continuous interdependence of neural processes. With qubits resolving the issue of continuity in a spatial sense and entanglement driving the time evolution, quantum computing stands the chance to present a realistic model of the brain capable of processes as vague as consciousness. While a more complex technical analysis is warranted, at the very least, such a technology could forego the previously presented argument against consciousness by no longer proving reducible to the CSA, paving the way for a different notion of computation and implementation to establish a formal link between computing and the inner workings of the brain. 
          </p>
        </section>

         {/* Conclusion */}
         <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Conclusion</h2>
          <p>
          This paper has examined the intricate relationship between continuity, interdependence, and consciousness, proposing a framework that recontextualizes the nature of consciousness in both biological and artificial systems. By drawing analogies between continuous physical systems, such as gravitational interactions and fluid dynamics, and neural processes, it has been argued that the continuous interdependence observed in neural activity is a necessary condition for the emergence of subjective experience. This conclusion raises significant challenges to the feasibility of machine consciousness, as contemporary computational models—reducible to combinatorial-state automata (CSA)—are inherently discrete and thus incapable of encapsulating the continuous, nonlinear complexity present in neural systems. The discrete nature of these models proves incompatible with the continuous interdependence that, according to this analysis, underpins conscious experience.
          </p>
          <br />
          <p>
          The exploration of quantum computing as a potential resolution introduces a theoretical avenue through which the principles of superposition and entanglement could address this limitation by enabling a continuous representation of neural processes. While the application of quantum computing presents a promising direction for future research, substantial technical challenges remain before such systems could plausibly simulate the continuity required for consciousness. Nonetheless, this investigation offers a foundation for further interdisciplinary discourse, integrating insights from neuroscience, computational theory, and philosophy to advance our understanding of consciousness—and whether it is possible for machines to achieve this profound and uniquely human phenomenon.
          </p>
        </section>
        
       {/* Sources Section */}
        <section style={styles.sources}>
          <h3 style={styles.sectionTitle}>Sources</h3>
          <ol style={styles.sourceList}>
            <li>Newton, Isaac. "Principia mathematica." Book III, Lemma V, Case 1 (1934): 1687.</li>
            <li>Iguchi, Tatsuo, and David Lannes. "Hyperbolic free boundary problems and applications to wave-structure interactions." arXiv preprint arXiv:1806.07704 (2018).</li>
            <li>Chalmers, David J. "Facing up to the problem of consciousness." Journal of consciousness studies 2, no. 3 (1995): 200-219.</li>
            <li>Friston, Karl. "The free-energy principle: a unified brain theory?." Nature reviews neuroscience 11, no. 2 (2010): 127-138.</li>
            <li>Koch, Christof. Biophysics of computation: information processing in single neurons. Oxford University Press, 2004.</li>
            <li>Tononi, Giulio. "Integrated information theory." Scholarpedia 10, no. 1 (2015): 4164.</li>
            <li>Schneider, Susan. "How to catch an AI zombie." Ethics of artificial intelligence (2020): 439.</li>
            <li>Chalmers, David J. The conscious mind: In search of a fundamental theory. Oxford Paperbacks, 1997.</li>
            <li>Colon-Ramos, Daniel. “Overview.” Colón-Ramos Lab. Accessed July 29, 2024.</li>
            <li>Nielsen, Michael A., and Isaac L. Chuang. Quantum computation and quantum information. Cambridge University Press, 2010.</li>
          </ol>
        </section>

        {/* Back Button at Bottom */}
        <button onClick={goBack} style={styles.backButtonBottom}>
          Thought Leadership Home
        </button>
      </article>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  backButtonTop: {
    margin: '10px 0',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#2e4075',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    textDecoration: 'underline',
  },
  backButtonBottom: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#2e4075',
    background: 'none',
    border: '1px solid #2e4075',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2e4075',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
  article: {
    marginTop: '20px',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2e4075',
  },
  sup: {
    fontSize: '0.8rem',
    verticalAlign: 'super',
  },
  sourceList: {
    paddingLeft: '20px',
    fontSize: '1rem',
  },
};

export default ArticleTemplate;



