import React from "react";

export interface Repo {
  id: number
  name: string
  created_at: string
}

export interface Profile {
  name: string
  followers: number
  public_repos: number
  avatar_url: string
}

export interface Children {
  children: React.ReactNode
}

