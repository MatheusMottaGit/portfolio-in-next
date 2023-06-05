import React from "react";

export interface GithubContext {
  repositories: Repo[] | undefined
}

export interface Children {
  children: React.ReactNode
}

export interface Repo {
  id: number
  name: string
  created_at: string
}