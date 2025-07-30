import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Play,
  Image,
  Monitor,
  Smartphone,
  Code,
  Database,
  Palette,
  Zap,
  Shield,
  Heart,
  ListMusic,
  Search,
  LayoutDashboard,
  User,
  Globe,
  Settings,
  Server,
  Brain,
  Clock,
  List,
  ServerCog,
  Newspaper,
} from "lucide-react";
const iconMap = {
  ExternalLink,
  Github,
  Play,
  Image,
  Monitor,
  Smartphone,
  Code,
  Database,
  Palette,
  Zap,
  Shield,
  Heart,
  ListMusic,
  Search,
  LayoutDashboard,
  User,
  Globe,
  Settings,
  Server,
  Brain,
  Clock,
  List,
  ServerCog,
  Newspaper,
};

import data from "../../data.json";

const ProjectShowcase = () => {
  const location = useLocation();
  const { title } = useParams();

  // Force scroll to top whenever this component mounts or location changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const decodedId = decodeURIComponent(title);
  const projectData = data.find((p) => p.title.includes(decodedId));

  // Sample project data - this would typically come from props or API

  const [activeMediaTab, setActiveMediaTab] = useState("screenshots");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-5">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                {projectData.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {projectData.subtitle}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="w-6 h-6 text-blue-400" />
                  <span className="text-3xl font-bold">
                    {projectData.stats.technologies}
                  </span>
                </div>
                <p className="text-gray-400">Technologies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-purple-400" />
                  <span className="text-3xl font-bold">
                    {projectData.stats.keyFeatures}
                  </span>
                </div>
                <p className="text-gray-400">Key Features</p>
              </div>
            </div>

            {/* Action Buttons */}
            {projectData.links.github && (
              <div className="flex gap-4">
                <a
                  href={projectData.links.github}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            )}
          </div>

          {/* Right Content - Project Preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-xl flex items-center justify-center">
                    <Monitor className="w-12 h-12 text-white/60" />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-40"></div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Technologies Used</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-4">
            {projectData.technologies.map((tech, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div
                    className={`h-9 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <img src={`images/${tech.path}.png`} className="h-15" />
                  </div>
                  <h3 className="font-semibold text-white">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              console.log(IconComponent);
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div>
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {(projectData.media.screenshots?.length > 0 ||
          projectData.media.screenRecordings?.length > 0) && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Image className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold">Project Media</h2>
            </div>

            {/* Determine default tab based on availability */}
            {activeMediaTab === null &&
              setActiveMediaTab(
                projectData.media.screenshots?.length > 0
                  ? "screenshots"
                  : "recordings"
              )}

            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              {projectData.media.screenshots?.length > 0 && (
                <button
                  onClick={() => setActiveMediaTab("screenshots")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeMediaTab === "screenshots"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <Image className="w-5 h-5" />
                  Screenshots
                </button>
              )}
              {projectData.media.screenRecordings?.length > 0 && (
                <button
                  onClick={() => setActiveMediaTab("recordings")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeMediaTab === "recordings"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  <Play className="w-5 h-5" />
                  Screen Recordings
                </button>
              )}
            </div>

            {/* Screenshots */}
            {activeMediaTab === "screenshots" &&
              projectData.media.screenshots?.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectData.media.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                      onClick={() => window.open(screenshot, "_blank")}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={screenshot}
                          alt={`Screenshot ${index + 1}`}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

            {/* Recordings */}
            {activeMediaTab === "recordings" &&
              projectData.media.screenRecordings?.length > 0 && (
                <div className="grid md:grid-cols-3 gap-6">
                  {projectData.media.screenRecordings.map(
                    (recording, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                        onClick={() => window.open(recording.video, "_blank")}
                      >
                        <div className="relative overflow-hidden rounded-xl cursor-pointer">
                          <img
                            src={recording.thumbnail}
                            alt={recording.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                              <Play className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                        <h3 className="font-semibold text-white mt-3">
                          {recording.title}
                        </h3>
                      </div>
                    )
                  )}
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;
