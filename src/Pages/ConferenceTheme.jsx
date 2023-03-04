import React, { useEffect } from 'react'
import styled from 'styled-components';
import Footer from '../Components/Footer';

export default function ConferenceTheme({handleScroll}) {

    useEffect(() => {
        document.title="ICRAMERD 2023 | CONFERENCE THEME";
        handleScroll();
      }, []);

    return (
        <>
        <Container>
            <p className='heading'>The International Conference on Recent advances in Mechanical Engineering Research and
                Development (ICRAMERD-2023) accepts quality research papers, follows a peer review process and gets the proceedings published through reputed publishers indexed by SCOPUS. The scope of the conference is to provide a forum for researchers, scientists, academicians, scholars and industrial practitioners from across the world to present papers and exchange their ideas on topics of great importance and recent developments in broad fields of sustainable science, material science and engineering. The International Conference deliberations are being structured to cover the following themes (but not limited to):
            </p>
            <h2>Advanced Materials</h2>
            <p className='desc'>Progress in Materials Engineering, Mechanical Behaviour of Materials, Mechanical
                Properties of Materials, Composite Materials, Ceramics, Polymers, Energy Storage and
                Conversion Materials, Environmental Materials, Renewable Materials, SMART Materials,
                Super Alloys, Electronics and Optical Materials, Biomaterials, Functionally Graded
                Materials, Meta materials, Structural Materials, Building Materials, Chemical Materials,
                3D Materials, Cryogenic Materials, Active Materials in MEMS Applications,
                Computational Materials, Nano Materials and Nano composites, Nano-Magnetic,
                Magnetic and Superconducting Materials, Corrosion and Wear Resistant Materials,
                Advanced Measurement Techniques of Materials and Characterizations.
            </p>
            <h2>Design Engineering</h2>
            <p className='desc'>Product Design and Development, Material Strength and Applied Mechanics,
                Biomechanics, Control System Design and Simulation, CAD/CAM/CAE/ Reverse
                Engineering, Structural Analysis, Vibration, Tribology, Finite Element, Modeling and
                Simulation.
            </p>
            <h2>Advances in Manufacturing Technology</h2>
            <p className='desc'>Advances in Machining Technology, Hybrid Manufacturing Processes and Technology,
                Sustainable Manufacturing, Micro and Nano technology, Casting, Metal Joining, Metal
                Forming Processes, Digital and Intelligent manufacturing, Non-traditional Machining and
                Advanced Manufacturing Processes, Green Manufacturing Processes, Cellular
                Manufacturing, Rapid Prototyping, Machine Vision, Additive Manufacturing, Powder
                Metallurgy, Composite and Polymer processing, Non-Destructive Testing, Plastic Processing
                Technology, Precision Engineering, Surface Engineering and Coating, Thin Film Technology.
            </p>
            <h2>Thermal Systems Engineering</h2>
            <p className='desc'>Fluid Flow, Heat Transfer, Application of Thermodynamics in Thermal System Design,
                Modelling and Simulation, Computational Techniques in Heat and Fluid Flow, Combustion,
                Power Plant Engineering, Gas Dynamics and Jet Propulsion, Advanced Energy Systems,
                Advanced Cooling Techniques, Battery Thermal Management, Refrigeration and Cryogenics,
                Heating Ventilation and Air conditioning (HVAC), Flow in Porous Media, Two Phase and
                Multi-Phase Flow, Micro/Nano Scale Fluid Flow, Magneto Hydro Dynamics and Plasma Fluid
                Flow, Molecular Transport, Slurry Transportation- Key Facts and Benefits.
            </p>
            <h2>Automation in Engineering</h2>
            <p className='desc'>Automation and Smart Systems, Robotics, Artificial Intelligence, Machine Learning and Big
                Data Analytics, Neural Networks and Deep Learning, Cyber-Physical Systems,
                Mechatronics, IOT/IIOT, Cluster, Cloud and Grid Computing, Fuzzy Control and Their
                Applications, Human Computer Interface, Automation in Energy Management Systems,
                Waste Management Systems.
            </p>
            <h2>Industrial and Systems Engineering</h2>
            <p className='desc'>Operation as a Service, Production Planning & Control, Total Quality Management, Supply
                Chain & Logistics Management, Business Process Re-engineering, Manufacturing Process
                Planning and Scheduling, Green Supply Chain, Reverse Supply Chain, JIT, Lean and Agile
                Manufacturing, Engineering Optimization, Risk based optimization, FMS, Human Factors
                Engineering, Advances in Work System Design, Quality Engineering, Reliability Engineering,
                Computer Aided Inspection, Industrial Safety Engineering, Biomedical Engineering,
                Healthcare systems Engineering.
            </p>
            <h2>Automotive Engineering</h2>
            <p className='desc'>Design and Simulation of Smart Vehicles, Electric and Hybrid Vehicles, Automated Guided
                Vehicle, Materials, Process and Design in Electric Vehicles, Application of Computational
                Fluid Dynamics in Automobiles, Aerodynamics of Automobile Components, Pollution Control.
            </p>
            <h2>Energy</h2>
            <p className='desc'>Renewable Energy and Technology, Solar, Wind, Biomass, Geothermal, Hydropower
                Energy Engineering, Fuel Cell, Alternative Fuel, Sustainable Energy System, Energy Saving Devices- Batteries and Supercapacitors.
            </p>
            <p className='footer1'>Participants from academia, R&D organizations and industries are invited to submit original and unpublished full research papers. </p>
            <p className='footer2'>All articles will be peer reviewed and accepted ones will be considered for publications in SCOPUS Indexed book chapters and proceedings based on the authors' expression of interest and quality of paper which is recommended by Technical Review Committee/Editorial Board. </p>
            <p className='footer3'>At least one author of the accepted paper has to register and present the paper in the conference.</p>
        </Container>
        <Footer/>
        </>
    )
}
const Container = styled.div`
margin-top: 4.6rem;
padding: 1rem 5rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 20rem;
h2{
    margin: 1rem 0;
    text-transform: uppercase;
    text-decoration: underline;
}
.heading{
    text-align: center;
    font-weight: 500;
}
.desc{
    text-align: justify;
}
.footer1{
    margin: 2rem 0 0 0;
    font-weight: 500;
}
.footer2{
    margin: 1rem 0;
    color: green;
    font-weight: 600;
}
.footer3{
    font-weight: 500;
}
`;