"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, ContactShadows, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { Activity, Cpu, ArrowUpRight, CheckCircle2, Zap } from "lucide-react";

// The Interactive Embedded Screen UI
function ScreenContent() {
  return (
    <div className="w-[840px] h-[540px] bg-[#0c0e12] text-stone-100 p-6 rounded-lg select-none font-sans flex flex-col justify-between border border-stone-800/80 shadow-2xl overflow-hidden">
      {/* Top App Header */}
      <div className="flex items-center justify-between border-b border-stone-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="h-4 w-px bg-stone-800" />
          <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
            <span className="font-semibold text-white">OmniCore Cloud OS</span>
            <span className="text-stone-600">/</span>
            <span>Production v3.4</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 text-emerald-400 font-mono text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI Node Cluster Online
          </span>
          <span className="text-stone-500 font-mono text-[11px]">Latency: 18ms</span>
        </div>
      </div>

      {/* Main SaaS Dashboard Body */}
      <div className="grid grid-cols-12 gap-5 py-4 flex-1">
        {/* Left Column: Key Metrics & Mini Chart */}
        <div className="col-span-4 flex flex-col justify-between gap-3">
          {/* Metric 1 */}
          <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-3.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
              ARR Run-Rate
            </span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-xl font-bold tracking-tight text-white">$1.84M</span>
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center">
                +24.6% <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-3.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
              Active Workflow Automations
            </span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-xl font-bold tracking-tight text-white">42,890 / hr</span>
              <span className="text-[11px] font-semibold text-blue-400 flex items-center">
                <Zap className="h-3 w-3 mr-0.5" /> 99.98%
              </span>
            </div>
          </div>

          {/* Micro Graph Bars */}
          <div className="rounded-lg border border-stone-800 bg-stone-950/60 p-3 flex-1 flex flex-col justify-between">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">
              Throughput Volume
            </span>
            <div className="flex items-end gap-1.5 h-16 pt-2">
              {[40, 65, 50, 85, 70, 95, 80, 100, 90, 110, 105, 125].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${(h / 130) * 100}%` }}
                  className={`flex-1 rounded-xs transition-all ${
                    i >= 8 ? "bg-blue-500" : "bg-stone-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Center / Right Column: Live AI Automation Pipeline Graph */}
        <div className="col-span-8 rounded-lg border border-stone-800 bg-stone-950/70 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-stone-800/80 pb-2.5">
            <span className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-blue-400" />
              Autonomous Data Orchestration Pipeline
            </span>
            <span className="text-[10px] font-mono text-stone-500">Graph ID: #WF-9082</span>
          </div>

          {/* Node Flow Diagram */}
          <div className="grid grid-cols-3 gap-3 my-auto py-2">
            {/* Step 1 Node */}
            <div className="rounded-lg border border-stone-700 bg-stone-900/90 p-3 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-400">01. INGEST</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              </div>
              <p className="text-xs font-semibold text-white">Multi-Source API</p>
              <p className="text-[10px] text-stone-400 leading-tight">PostgreSQL & Kafka sync</p>
            </div>

            {/* Step 2 Node */}
            <div className="rounded-lg border border-blue-500/50 bg-blue-950/30 p-3 space-y-1.5 shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-blue-300">02. REASONING</span>
                <Cpu className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
              </div>
              <p className="text-xs font-semibold text-white">Neural Synthesizer</p>
              <p className="text-[10px] text-blue-200/70 leading-tight">Classification & Vector match</p>
            </div>

            {/* Step 3 Node */}
            <div className="rounded-lg border border-stone-700 bg-stone-900/90 p-3 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-400">03. DISPATCH</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              </div>
              <p className="text-xs font-semibold text-white">Automated Actions</p>
              <p className="text-[10px] text-stone-400 leading-tight">Client CRM & Email Triggers</p>
            </div>
          </div>

          {/* Terminal / Status Bar */}
          <div className="rounded border border-stone-800/80 bg-black/50 px-3 py-2 text-[10px] font-mono text-stone-400 flex items-center justify-between">
            <span className="text-emerald-400">✓ 4,218 records synchronized with 0 dropped events</span>
            <span className="text-stone-500">Live Streaming</span>
          </div>
        </div>
      </div>

      {/* Bottom Status Footer */}
      <div className="flex items-center justify-between border-t border-stone-800/80 pt-3 text-[11px] text-stone-500 font-mono">
        <span>Architected by Nahian Digital</span>
        <span>Secure Enclave TLS 1.3 · Scalable Microservices</span>
      </div>
    </div>
  );
}

// 3D Laptop Model
function Laptop() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const { x, y } = state.pointer;
    // Elegant, restrained mouse parallax
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.25,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.15 + 0.1,
      0.05
    );
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Laptop Base Keyboard Deck */}
      <mesh position={[0, -0.05, 0.4]}>
        <boxGeometry args={[4.4, 0.12, 2.9]} />
        <meshStandardMaterial
          color="#181a1f"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* Laptop Trackpad Accent */}
      <mesh position={[0, 0.015, 1.1]}>
        <boxGeometry args={[1.3, 0.005, 0.85]} />
        <meshStandardMaterial
          color="#22252c"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Keyboard Area Inset */}
      <mesh position={[0, 0.015, 0.15]}>
        <boxGeometry args={[3.8, 0.005, 1.5]} />
        <meshStandardMaterial
          color="#121316"
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>

      {/* Display Lid / Screen Assembly (Angled Open ~105 degrees) */}
      <group position={[0, 0, -1.05]} rotation={[-0.25, 0, 0]}>
        {/* Screen Backplate */}
        <mesh position={[0, 1.4, -0.04]}>
          <boxGeometry args={[4.35, 2.8, 0.08]} />
          <meshStandardMaterial
            color="#14161b"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Screen Glass Bezel */}
        <mesh position={[0, 1.4, 0.005]}>
          <planeGeometry args={[4.25, 2.7]} />
          <meshStandardMaterial
            color="#08090b"
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>

        {/* Embedded Interactive Product Interface */}
        <Html
          position={[0, 1.4, 0.02]}
          transform
          occlude
          distanceFactor={3.2}
          className="pointer-events-auto"
        >
          <ScreenContent />
        </Html>
      </group>
    </group>
  );
}

// Subtle Floating Orbiting Nodes around the device
function FloatingNodes() {
  return (
    <group>
      {/* Node 1: Left Cloud Node */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[-3.2, 1.2, -0.5]}>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1d4ed8"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Node 2: Right AI Node */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.7}>
        <mesh position={[3.3, 0.8, -0.2]}>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#4338ca"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Node 3: Top Ambient Core */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[2.6, 2.2, -1.2]}>
          <dodecahedronGeometry args={[0.18, 0]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function ProductShowcaseScene() {
  return (
    <div
      className="relative w-full h-[360px] sm:h-[500px] lg:h-[640px]"
      style={{ touchAction: "pan-y" }}
    >
      <Canvas
        camera={{ position: [0, 0.8, 4.6], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "auto", touchAction: "pan-y" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-5, 4, 2]} intensity={1.2} color="#93c5fd" />
        <pointLight position={[0, -2, 2]} intensity={0.8} color="#3b82f6" />

        {/* Floating Animated Assembly */}
        <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.35}>
          <Laptop />
          <FloatingNodes />
        </Float>

        {/* Minimal Subtle Digital Sparkles */}
        <Sparkles
          count={35}
          scale={7}
          size={1.5}
          speed={0.3}
          opacity={0.35}
          color="#93c5fd"
        />

        {/* Soft Ambient Contact Shadow Under Laptop */}
        <ContactShadows
          position={[0, -1.6, 0]}
          opacity={0.35}
          scale={9}
          blur={2.4}
          far={4}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
